# 📦 Product Backlog — Plataforma Strava Analytics

Este documento consolida el backlog completo del ecosistema: backend, sincronizador, API analítica, frontend y developer experience.  
Está diseñado para integrarse con GitHub Projects, GitHub CLI y tus scripts de automatización.

---

# 🧱 Épica 1 — Infraestructura del Ecosistema

- Contenerizar servicios (frontend, backend, sincronizador, DB)
- Crear stack de desarrollo local (docker-compose o equivalente)
- Añadir healthchecks y logs estructurados
- Gateway/API centralizado (Traefik o FastAPI)
- Documentar arquitectura (diagramas, flujos, dependencias)
- Tests de integración del sincronizador

---

# 🔄 Épica 2 — Sincronización y Pipeline de Datos

- Métricas internas del sincronizador (tiempos, errores, nº actividades)
- Endpoint para sincronización manual
- Scheduler/colas para sincronización automática
- Validación de datos entrantes
- Versionado del modelo de datos (Alemic + pipeline)
- Tests unitarios del pipeline

---

# 📊 Épica 3 — API Analítica

### Endpoints agregados
- Distancia total
- Elevación acumulada
- Tiempo total
- Ritmo medio

### Endpoints avanzados
- Evolución anual
- Comparativa año vs año
- Distribución por tipo de actividad

### Endpoints geoespaciales (PostGIS)
- Mapa de calor
- Rutas más frecuentes
- Segmentos detectados

### Endpoints de actividad individual
- Splits
- Ritmo cardíaco
- Velocidad instantánea

---

# 🎨 Épica 4 — Frontend (Vue 3 + Vite + Naive UI)

### Base del proyecto
- Configurar estructura base del frontend
- Configurar Naive UI y tema global
- Implementar tema Strava (light/dark)
- Integrar Lucide Icons

### Layout y navegación
- Crear layout principal responsive (sidebar, topbar, móvil)
- Crear sistema de rutas modular (lazy loading)
- Crear store global (Pinia)

### Componentes base
- AppCard
- AppSection
- AppStat
- AppChartContainer
- AppButton
- AppInput
- Sistema de tipografías y espaciados

### Dashboards
- Integrar librería de gráficos (ECharts/ApexCharts)
- Dashboard principal (métricas + gráficas)
- Vista de actividad (mapa, splits, HR)
- Integrar mapas (Leaflet/MapLibre)

### Personalización
- Preferencias persistentes (tema, widgets, orden)
- Animaciones y microinteracciones

### Extensibilidad
- Sistema de módulos/dashboards extensibles
- Storybook para componentes
- Tests E2E (Playwright/Cypress)
- Scripts de generación (create:component, create:module, create:page)

---

# 🧠 Épica 5 — Análisis Avanzado y ML

- Carga de entrenamiento (TSS estimado)
- CTL/ATL/TSB
- Patrones de rendimiento
- Comparador de actividades
- Predicción de tiempos en rutas conocidas
- Detección de anomalías (HR, ritmo, potencia)

---

# 🧰 Épica 6 — Developer Experience

- DevContainer completo
- Scripts de generación
- Documentación de onboarding
- Linter + formatter + commitlint
- Tests E2E
- Storybook para componentes

---

# 🗂️ Preparación para GitHub Projects

## Columnas sugeridas
- Backlog  
- Ready  
- In Progress  
- Review  
- Done  

## Etiquetas sugeridas
- `frontend`
- `backend`
- `sync`
- `analytics`
- `infra`
- `ux`
- `ml`
- `documentation`

## Milestones sugeridos
- Fase 1 — Ecosistema  
- Fase 2 — API Analítica  
- Fase 3 — Dashboard MVP  
- Fase 4 — Visualizaciones Avanzadas  
- Fase 5 — ML Ligero  
- Fase FE 1 — Base del Proyecto  
- Fase FE 2 — Layout y Navegación  
- Fase FE 3 — Componentes Base  
- Fase FE 4 — Dashboards  
- Fase FE 5 — Personalización  
- Fase FE 6 — Extensibilidad  
