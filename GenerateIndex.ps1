
Function ProcessFolder {
    param($FolderPath);

    $Items = Get-ChildItem -Path $FolderPath | 
    Where-Object -FilterScript {
        return $_.Name -ne "index.d.ts"
    }

    $Items | ForEach-Object -Process {
        return "/// <reference path=""$($_.PSIsContainer ? "$($_.Name)/index.d.ts" : $_.Name)""/>"
    } |
    Set-Content -Path "$FolderPath\index.d.ts"

    $SubFolders = $Items |
    Where-Object -FilterScript {
        return $_.PSIsContainer
    }

    $SubFolders |
    ForEach-Object -Process {
        ProcessFolder $_
    }
}

ProcessFolder "$([System.IO.Path]::GetDirectoryName($PSCommandPath))\types"
