
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from "fs";
import sharp from "sharp";

// Custom plugin to convert images to WebP and copy to images folder
const imageOptimizationPlugin = () => {
  return {
    name: 'image-optimization',
    async writeBundle() {
      const sourceDir = 'public/lovable-uploads';
      const targetDir = 'dist/images';
      
      try {
        // Create target directory if it doesn't exist
        mkdirSync(targetDir, { recursive: true });
        
        if (!existsSync(sourceDir)) {
          console.warn('Source directory does not exist:', sourceDir);
          return;
        }
        
        // Get all files from source directory
        const files = readdirSync(sourceDir);
        
        for (const file of files) {
          const sourcePath = path.join(sourceDir, file);
          const fileStats = statSync(sourcePath);
          
          if (fileStats.isFile()) {
            const ext = path.extname(file).toLowerCase();
            const baseName = path.basename(file, ext);
            
            // Check if it's an image file
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
              const webpPath = path.join(targetDir, `${baseName}.webp`);
              
              try {
                await sharp(sourcePath)
                  .webp({ 
                    quality: 85, // High quality WebP compression
                    effort: 6   // Maximum compression effort
                  })
                  .toFile(webpPath);
                
                console.log(`Converted ${file} to WebP format`);
              } catch (error) {
                console.error(`Failed to convert ${file}:`, error);
                // Fallback: copy original file
                copyFileSync(sourcePath, path.join(targetDir, file));
              }
            } else {
              // Copy non-image files as-is
              copyFileSync(sourcePath, path.join(targetDir, file));
            }
          }
        }
      } catch (error) {
        console.warn('Could not process images:', error instanceof Error ? error.message : String(error));
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
    imageOptimizationPlugin(),
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
