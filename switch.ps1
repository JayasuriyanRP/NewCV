param(
  [Parameter(Mandatory = $true)]
  [ValidateSet("work", "personal")]
  [string]$profile
)

# Define your profiles here
$profiles = @{
  "work"     = @{
    "user.name"  = "RP, Jayasuriyan"
    "user.email" = "jayasuriyan.rp@krones.com"
  }
  "personal" = @{
    "user.name"  = "RP, Jayasuriyan"
    "user.email" = "r.p.jayasuriyanece@outlook.com"
  }
}

if ($profiles.ContainsKey($profile)) {
  $config = $profiles[$profile]
  git config --global user.name  "$($config['user.name'])"
  git config --global user.email "$($config['user.email'])"
  Write-Host "Switched to $profile profile:"
  Write-Host "  Name : $($config['user.name'])"
  Write-Host "  Email: $($config['user.email'])"
}
else {
  Write-Host "Profile '$profile' not found."
}