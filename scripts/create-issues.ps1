param(
    [Parameter(Mandatory = $true)]
    [string]$Repo,

    [Parameter(Mandatory = $true)]
    [string]$File
)

$yaml = Get-Content $File | ConvertFrom-Yaml

foreach ($issue in $yaml.issues) {

    $title = $issue.title
    $body = $issue.body
    $labels = $issue.labels -join ","
    $milestone = $issue.milestone

    Write-Host "Creando issue: $title" -ForegroundColor Green

    $cmd = @(
        "issue", "create",
        "--repo", $Repo,
        "--title", "`"$title`"",
        "--body", "`"$body`""
    )

    if ($labels) { $cmd += @("--label", $labels) }
    if ($milestone) { $cmd += @("--milestone", "`"$milestone`"") }

    gh @cmd
}
