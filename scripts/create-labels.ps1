param(
    [Parameter(Mandatory = $true)]
    [string]$Repo
)

$labels = @(
    @{ name="frontend"; color="1abc9c" }
    @{ name="backend"; color="3498db" }
    @{ name="sync"; color="9b59b6" }
    @{ name="analytics"; color="e67e22" }
    @{ name="infra"; color="2ecc71" }
    @{ name="ux"; color="e84393" }
    @{ name="ml"; color="f1c40f" }
    @{ name="documentation"; color="95a5a6" }
)

foreach ($label in $labels) {
    Write-Host "Creando label: $($label.name)" -ForegroundColor Cyan
    gh label create $label.name --color $label.color --repo $Repo --force
}
