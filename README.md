# PokeAPI React App

Este es un proyecto de una aplicación web construida con **React**, **GraphQL**, **Redux Toolkit**, **TypeScript**, **Vite**, **Vitest** y utilizando las metodologías de **Screaming Architecture** y **Atomic Design**. La aplicación consume la PokeAPI para mostrar información sobre Pokémon.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Comandos Disponibles](#comandos-disponibles)
- [Arquitectura](#arquitectura)
- [Estándares de Código](#estándares-de-código)
- [Contribuciones](#contribuciones)

## Características

- Consumo de la **PokeAPI** utilizando **GraphQL**.
- Estado global gestionado con **Redux Toolkit**.
- Desarrollado en **TypeScript**.
- Aplicación modular siguiendo la metodología de **Atomic Design** para la UI.
- Arquitectura basada en principios de **Screaming Architecture**.
- Configuración de linter con **StandardJS**.
- Pruebas unitarias con **Vitest**.

## Tecnologías

- **React**: Librería para construir interfaces de usuario.
- **GraphQL**: Para hacer consultas a la PokeAPI.
- **Redux Toolkit**: Manejo del estado global de la aplicación.
- **TypeScript**: Tipado estático para mejorar la robustez del código.
- **Vite**: Para un desarrollo rápido y una experiencia mejorada en el build.
- **Vitest**: Para pruebas unitarias y de integración.
- **StandardJS**: Linter para mantener la consistencia en el estilo del código.

## Estructura del Proyecto

Este proyecto sigue la arquitectura **Screaming Architecture** y utiliza **Atomic Design** para organizar los componentes de UI.

```
src/
├── api/                 # Integraciones con la PokeAPI usando GraphQL
├── application/         # Casos de uso de la aplicación
├── domain/              # Entidades y lógica de negocio
├── services/      # Implementaciones técnicas (GraphQL, Redux)
├── ui/                  # Componentes organizados con Atomic Design
│   ├── atoms/           # Componentes básicos (botones, inputs)
│   ├── molecules/       # Agrupaciones de átomos (tarjetas, formularios simples)
│   ├── organisms/       # Agrupaciones de moléculas (listas, formularios completos)
│   ├── templates/       # Estructuras de página sin datos
│   └── pages/           # Páginas completas con datos y lógica
├── store/               # Estado global gestionado con Redux Toolkit
├── hooks/               # Hooks personalizados para manejo del estado
└── tests/               # Pruebas unitarias y de integración
```

## Instalación

### Requisitos

- **Node.js** (versión 14 o superior)
- **pnpm**

### Pasos

1. Clona el repositorio:

   ```bash
   git clone https://github.com/camiloacostam/pokeapi-react-app.git
   cd pokeapi-react-app
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   pnpm run dev
   ```

   Esto iniciará la aplicación en modo desarrollo usando **Vite**.

## Comandos Disponibles

- `pnpm run dev`: Inicia la aplicación en modo desarrollo.
- `pnpm run build`: Crea el build optimizado para producción.
- `pnpm run lint`: Ejecuta el linter para verificar el estilo de código.
- `pnpm run test`: Ejecuta las pruebas con **Vitest**.
- `pnpm run format`: Formatea el código utilizando ESLint.

## Arquitectura

### Screaming Architecture

El enfoque principal de **Screaming Architecture** es que la estructura de la aplicación refleje su dominio de negocio, no los detalles técnicos. El proyecto está organizado de tal manera que los **casos de uso** y **entidades del dominio** ocupan un lugar central, mientras que las tecnologías (como GraphQL, Redux) están en una capa de infraestructura.

### Atomic Design

La interfaz de usuario está diseñada utilizando los principios de **Atomic Design**, donde los componentes están organizados en diferentes niveles de granularidad:

- **Átomos**: Los componentes más básicos como botones e inputs.
- **Moléculas**: Agrupaciones de átomos como un formulario simple.
- **Organismos**: Componentes más complejos que agrupan moléculas.
- **Plantillas**: Estructuras completas de página sin datos.
- **Páginas**: Páginas completas que integran plantillas con datos y lógica.

## Estándares de Código

Este proyecto utiliza **StandardJS** como linter para mantener la consistencia en el estilo del código. Sigue las reglas básicas de StandardJS con algunos ajustes para **TypeScript** y **React**.

### Ejecución del linter:

```bash
pnpm run lint
```

Esto verificará el código en la carpeta `src/` y te informará de cualquier inconsistencia de estilo o error de tipo.

## Pruebas

Las pruebas se realizan con **Vitest**, un framework ligero para pruebas de unitarias y de integración.

- Ejecutar todas las pruebas:

  ```bash
  pnpm run test
  ```

- Ejecutar las pruebas en modo observador (útil para el desarrollo):

  ```bash
  pnpm run test -- --watch
  ```

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Agrega nueva feature'`).
4. Haz push a la rama (`git push origin feature/nueva-feature`).
5. Abre un **Pull Request**.
