Simulation platform for prototyping static analysis interfaces

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/065274f61ddf483da1b93d07660ddc3e)](https://app.codacy.com/app/nguyenLisa/prototypeJS?utm_source=github.com&utm_medium=referral&utm_content=gapran/prototypeJS&utm_campaign=Badge_Grade_Dashboard)

# Installation manual for meteor 

For Windows : 

1. First install Chocolatey, then run this command using Windows Powershell command prompt 
choco install meteor

For Installing Chocolatey :

Requirements

1. Windows 7+ / Windows Server 2003+
2. PowerShell v2+ (Not PowerShell Core yet though)
3. .NET Framework 4+ (the installation will attempt to install .NET 4.0 if you do not have it installed)

Procedure : 

1. Open Windows Powershell/cmd (Run as Administrator)
2. Run the following command :

For PowerShell:
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

For cmd:
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

3. Run choco or choco -? now to see if chocolatey has installed properly.
