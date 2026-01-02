@echo off
if "%~1"=="" (
  echo Tulis pesannya dong, bos. Contoh: gas "update warna button"
  exit /b
)

echo [1/3] Menambahkan semua file...
git add .

echo [2/3] Menyimpan perubahan (Commit)...
git commit -m "%~1"

echo [3/3] Upload ke GitHub (Push)...
git push origin main

echo.
echo Selesai!
