
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";

// Custom plugin to copy lovable-uploads to images during build
const copyLovableUploadsPlugin = () => {
  return {
    name: 'copy-lovable-uploads',
    writeBundle() {
      const sourceDir = 'public/lovable-uploads';
      const targetDir = 'dist/images';
      
      try {
        // Create target directory if it doesn't exist
        mkdirSync(targetDir, { recursive: true });
        
        // Copy all files from source to target
        const files = readdirSync(sourceDir);
        files.forEach(file => {
          const sourcePath = path.join(sourceDir, file);
          const targetPath = path.join(targetDir, file);
          
          if (statSync(sourcePath).isFile()) {
            copyFileSync(sourcePath, targetPath);
            console.log(`Copied ${file} to images folder`);
          }
        });
      } catch (error) {
        console.warn('Could not copy lovable-uploads to images:', error.message);
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    copyLovableUploadsPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/index-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
  },
}));
