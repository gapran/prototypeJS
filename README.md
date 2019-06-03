Simulation platform for prototyping static analysis interfaces

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

1. Open Windows Powershell (Run as Administrator)
2. Run the following command :

Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

3. Run choco or choco -? now to see if chocolatey has installed properly.
