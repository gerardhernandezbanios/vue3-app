param(
    [Parameter(Mandatory = $true)]
    [string]$Repo
)

$milestones = @(
    "Fase 1 — Ecosistema",
    "Fase 2 — API Analítica",
    "Fase 3 — Dashboard MVP",
    "Fase 4 — Visualizaciones Avanzadas",
    "Fase 5 — ML Ligero",
    "Fase FE 1 — Base del Proyecto",
    "Fase FE 2 — Layout y Navegación",
    "Fase FE 3 — Componentes Base",
    "Fase FE 4 — Dashboards",
    "Fase FE 5 — Personalización",
    "Fase FE 6 — Extensibilidad"
)

foreach ($m in $milestones) {
    Write-Host "Creando milestone: $m" -ForegroundColor Yellow
    gh milestone create "$m" --repo $Repo
}
