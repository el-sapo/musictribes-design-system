import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import prettier from 'prettier';

// Get the directory name in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readJsonFile(filePath) {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

function generateCssVariables(tokens) {
  let css = ':root {\n  /* Core DS variables mapped from tokens */\n';
  
  // Process color tokens
  if (tokens.color) {
    Object.entries(tokens.color).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Handle nested objects by creating variables for each nested property
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          css += `  --ds-color-${key}-${nestedKey}: ${nestedValue};\n`;
        });
      } else {
        css += `  --ds-color-${key}: ${value};\n`;
      }
    });
    css += '\n';
  }
  
  // Process font tokens
  if (tokens.typography?.fonts) {
    Object.entries(tokens.typography.fonts).forEach(([key, value]) => {
      css += `  --ds-font-${key}: ${value.join(', ')};\n`;
    });
    css += '\n';
  }
  
  // Process spacing tokens
  if (tokens.spacing) {
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Handle nested objects by creating variables for each nested property
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          css += `  --ds-space-${key}-${nestedKey}: ${nestedValue}px;\n`;
        });
      } else {
        css += `  --ds-space-${key}: ${value}px;\n`;
      }
    });
    css += '\n';
  }
  
  // Process radius tokens
  if (tokens.radius) {
    Object.entries(tokens.radius).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Handle nested objects by creating variables for each nested property
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          const unit = typeof nestedValue === 'number' ? 'px' : '';
          css += `  --ds-radius-${key}-${nestedKey}: ${nestedValue}${unit};\n`;
        });
      } else {
        const unit = typeof value === 'number' ? 'px' : '';
        css += `  --ds-radius-${key}: ${value}${unit};\n`;
      }
    });
    css += '\n';
  }
  
  css += '}';

  // Add shadcn-compatible variables
  css += '\n\n/* Optional: provide shadcn-friendly variable names (hex OK if Tailwind config avoids hsl()) */\n:root {\n';
  css += '  --background: var(--ds-color-palette-bg);\n';
  css += '  --foreground: var(--ds-color-palette-text);\n';
  css += '  --card: var(--ds-color-palette-surface);\n';
  css += '  --card-foreground: var(--ds-color-palette-text);\n';
  css += '  --popover: var(--ds-color-palette-surface);\n';
  css += '  --popover-foreground: var(--ds-color-palette-text);\n';
  css += '  --primary: var(--ds-color-brand-primary);\n';
  css += '  --primary-foreground: #000000;\n';
  css += '  --secondary: var(--ds-color-brand-accent);\n';
  css += '  --secondary-foreground: #000000;\n';
  css += '  --muted: var(--ds-color-palette-muted);\n';
  css += '  --muted-foreground: var(--ds-color-palette-text);\n';
  css += '  --accent: var(--ds-color-brand-accent);\n';
  css += '  --accent-foreground: #000000;\n';
  css += '  --destructive: var(--ds-color-palette-danger);\n';
  css += '  --destructive-foreground: #ffffff;\n';
  css += '  --border: var(--ds-color-palette-border);\n';
  css += '  --input: var(--ds-color-palette-border);\n';
  css += '  --ring: var(--ds-color-brand-accent);\n';
  css += '}\n';
  
  // Add base app styles hook (optional)
  css += '\n/* Base app styles hook (optional) */\nbody { background: var(--ds-color-palette-bg); color: var(--ds-color-palette-text); }\n';
  
  return css;
}

function generateTsVariables(tokens) {
  let ts = '// Auto-generated file - do not modify directly\n';
  ts += '/* eslint-disable */\n\n';
  
  ts += 'export const colors = {\n';
  if (tokens.color) {
    Object.entries(tokens.color).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Handle nested objects by creating a nested object in TS
        ts += `  ${key}: ${JSON.stringify(value)},\n`;
      } else {
        ts += `  ${key}: '${value}',\n`;
      }
    });
  }
  ts += '} as const;\n\n';
  
  ts += 'export const spacing = {\n';
  if (tokens.spacing) {
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      // Handle object values by stringifying them
      const formattedValue = typeof value === 'object' && value !== null 
        ? JSON.stringify(value) 
        : value;
      ts += `  ${key}: ${formattedValue},\n`;
    });
  }
  ts += '} as const;\n\n';
  
  ts += 'export const radius = {\n';
  if (tokens.radius) {
    Object.entries(tokens.radius).forEach(([key, value]) => {
      // Handle object values by stringifying them
      const formattedValue = typeof value === 'object' && value !== null 
        ? JSON.stringify(value) 
        : value;
      ts += `  ${key}: ${formattedValue},\n`;
    });
  }
  ts += '} as const;\n\n';
  
  ts += 'export const typography = {\n';
  if (tokens.typography) {
    ts += '  fonts: {\n';
    if (tokens.typography.fonts) {
      Object.entries(tokens.typography.fonts).forEach(([key, value]) => {
        ts += `    ${key}: [${value.map(v => `'${v}'`).join(', ')}],\n`;
      });
    }
    ts += '  },\n';
    
    ts += '  sizes: {\n';
    if (tokens.typography.sizes) {
      Object.entries(tokens.typography.sizes).forEach(([key, value]) => {
        // Handle object values by stringifying them
        const formattedValue = typeof value === 'object' && value !== null 
          ? JSON.stringify(value) 
          : value;
        ts += `    ${key}: ${formattedValue},\n`;
      });
    }
    ts += '  },\n';
    
    ts += '  weights: {\n';
    if (tokens.typography.weights) {
      Object.entries(tokens.typography.weights).forEach(([key, value]) => {
        // Handle object values by stringifying them
        const formattedValue = typeof value === 'object' && value !== null 
          ? JSON.stringify(value) 
          : value;
        ts += `    ${key}: ${formattedValue},\n`;
      });
    }
    ts += '  },\n';
  }
  ts += '} as const;\n\n';
  
  ts += 'export const theme = { colors, spacing, radius, typography } as const;\n';
  ts += 'export type Theme = typeof theme;\n';
  
  return ts;
}

async function formatCode(code, parser = 'typescript') {
  return prettier.format(code, { 
    parser, 
    tabWidth: 2,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'es5'
  });
}

async function main() {
  try {
    // Read all token files
    const tokensDir = path.join(__dirname, '..', 'tokens');
    const files = await fs.readdir(tokensDir);
    
    const tokens = {};
    for (const file of files) {
      if (file.endsWith('.json')) {
        const tokenName = path.basename(file, '.json');
        tokens[tokenName] = await readJsonFile(path.join(tokensDir, file));
      }
    }
    
    // Generate platform-specific files
    const webTokensPath = path.join(__dirname, '..', 'platforms/web/tokens.css');
    const rnTokensPath = path.join(__dirname, '..', 'platforms/react-native/tokens.ts');
    
    const cssContent = generateCssVariables(tokens);
    const tsContent = generateTsVariables(tokens);
    
    // Format the generated content
    const formattedCss = await formatCode(cssContent, 'css');
    const formattedTs = await formatCode(tsContent, 'typescript');
    
    // Write the files
    await fs.writeFile(webTokensPath, formattedCss);
    await fs.writeFile(rnTokensPath, formattedTs);
    
    console.log('✅ Successfully synchronized platform tokens');
  } catch (error) {
    console.error('❌ Error synchronizing tokens:', error);
    process.exit(1);
  }
}

main();
