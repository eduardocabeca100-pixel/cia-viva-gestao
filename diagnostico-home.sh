#!/usr/bin/env bash

echo "=== 1. LOCAL DO PROJETO ==="
pwd

echo ""
echo "=== 2. ARQUIVOS ENCONTRADOS ==="
find src -maxdepth 5 -type f | grep -E 'main\.tsx|App\.tsx|routes\.tsx|HomePage\.tsx|SiteLayout\.tsx' || true

echo ""
echo "=== 3. BUSCA POR ROTAS E HOME ==="
grep -RIn --exclude-dir=node_modules --exclude-dir=dist --exclude=".env*" 'HomePage\|SiteLayout\|BrowserRouter\|createBrowserRouter\|Routes\|Route\|path.*\/\|element' src || true

echo ""
echo "=== 4. src/main.tsx ==="
sed -n '1,220p' src/main.tsx 2>/dev/null || echo "Arquivo não encontrado"

echo ""
echo "=== 5. src/App.tsx ==="
sed -n '1,260p' src/App.tsx 2>/dev/null || echo "Arquivo não encontrado"

echo ""
echo "=== 6. src/app/routes.tsx ==="
sed -n '1,280p' src/app/routes.tsx 2>/dev/null || echo "Arquivo não encontrado"

echo ""
echo "=== 7. src/site/layout/SiteLayout.tsx ==="
sed -n '1,280p' src/site/layout/SiteLayout.tsx 2>/dev/null || echo "Arquivo não encontrado"

echo ""
echo "=== 8. src/site/pages/home/HomePage.tsx ==="
sed -n '1,340p' src/site/pages/home/HomePage.tsx 2>/dev/null || echo "Arquivo não encontrado"

echo ""
echo "=== 9. SEGURANÇA DO .env ==="
[ -f .env ] && echo "OK: .env existe localmente." || echo "Aviso: .env não encontrado localmente."

git check-ignore .env >/dev/null 2>&1 && echo "OK: .env está ignorado pelo Git." || echo "ATENÇÃO: .env talvez NÃO esteja no .gitignore."

if [ -n "$(git ls-files .env)" ]; then
  echo "ERRO: .env está rastreado pelo Git!"
else
  echo "OK: .env não está rastreado pelo Git."
fi

echo ""
echo "=== 10. BUILD ==="
npm run build

echo ""
echo "=== 11. GIT SEGURO ==="
git status --short
git add .
git restore --staged .env 2>/dev/null || true
git diff --cached --quiet && echo "Nada para commitar agora." || git commit -m "diagnostica rota da home"
git push origin main
