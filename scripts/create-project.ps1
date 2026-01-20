param(
    [Parameter(Mandatory = $true)]
    [string]$OrgOrUser,

    [Parameter(Mandatory = $true)]
    [string]$ProjectName
)

$query = @"
mutation {
  createProjectV2(input: {
    ownerId: \"$OrgOrUser\",
    title: \"$ProjectName\"
  }) {
    projectV2 {
      id
      title
    }
  }
}
"@

gh api graphql -f query="$query"
