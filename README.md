# Auto-VehiculoTypescript
en clase ejercicio 
Claro, aquí tienes una guía paso a paso para ejecutar TypeScript en Visual Studio Code:

**Paso 1: Crear un proyecto TypeScript**

1. Abre Visual Studio Code.
2. Crea una nueva carpeta para tu proyecto o abre una carpeta existente en la que quieras trabajar.
3. En la terminal integrada de Visual Studio Code (puedes abrirla desde `Terminal` > `Nueva terminal`), inicializa un proyecto Node.js ejecutando el siguiente comando:

```bash
npm init -y
```

4. Instala TypeScript en tu proyecto ejecutando el siguiente comando:

```bash
npm install typescript --save-dev
```

5. Crea un archivo de configuración TypeScript llamado `tsconfig.json` en la raíz de tu proyecto ejecutando el siguiente comando:

```bash
npx tsc --init
```

**Paso 2: Escribir código TypeScript**

1. Crea o modifica tus archivos TypeScript con la extensión `.ts`. Por ejemplo, puedes crear un archivo `app.ts` en la raíz de tu proyecto.

2. Escribe tu código TypeScript en los archivos `.ts` que hayas creado o modificado.

**Paso 3: Compilar TypeScript**

1. Para compilar tu código TypeScript, simplemente ejecuta el siguiente comando en la terminal de Visual Studio Code:

```bash
npx tsc
```

Este comando compilará todos los archivos TypeScript en tu proyecto según la configuración especificada en el archivo `tsconfig.json`.

**Paso 4: Ejecutar el código JavaScript generado**

1. Una vez que la compilación haya terminado sin errores, puedes ejecutar tu código JavaScript resultante. Por ejemplo, si tienes un archivo `app.ts`, se generará un archivo `app.js`.

2. Ejecuta el archivo JavaScript generado normalmente con Node.js. Por ejemplo:

```bash
node app.js
```

**Paso 5: Automatizar la compilación con Visual Studio Code**

1. Puedes automatizar el proceso de compilación de TypeScript en Visual Studio Code utilizando tareas.

2. Crea un archivo `tasks.json` en la carpeta `.vscode` en la raíz de tu proyecto con la configuración de la tarea de compilación. Por ejemplo:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "compile",
      "command": "tsc",
      "type": "shell",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": ["$tsc"]
    }
  ]
}
```

Ahora puedes compilar tu proyecto TypeScript simplemente presionando `Ctrl+Shift+B` (o `Cmd+Shift+B` en macOS) y seleccionando la tarea de compilación.

¡Listo! Ahora estás listo para escribir, compilar y ejecutar código TypeScript en Visual Studio Code. Si necesitas más ayuda, no dudes en preguntar.
