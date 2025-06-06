// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // --- Nueva configuración para ignorar variables con _ ---
  {
    files: ["**/*.ts", "**/*.tsx"], // Aplica esta configuración a archivos TypeScript
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // O "error" si prefieres que sea un error
        {
          "argsIgnorePattern": "^_", // Ignora argumentos de funciones que empiezan con _
          "varsIgnorePattern": "^_",   // Ignora variables que empiezan con _
          "destructuredArrayIgnorePattern": "^_" // Ignora elementos desestructurados de arrays (como en tu caso de desestructuración de objetos)
        }
      ],
      // Puedes añadir aquí otras reglas si las necesitas
    },
  },
  // --- Fin de la nueva configuración ---
];

export default eslintConfig;