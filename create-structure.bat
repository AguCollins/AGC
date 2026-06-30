@echo off
echo Creating project folder structure...

:: ========== ROOT ==========
if not exist "src" mkdir src
if not exist "public" mkdir public

:: ========== COMPONENTS ==========
if not exist "src\components" mkdir src\components
if not exist "src\components\common" mkdir src\components\common
if not exist "src\components\common\BackToTop" mkdir src\components\common\BackToTop
if not exist "src\components\common\Loader" mkdir src\components\common\Loader
if not exist "src\components\common\ScrollProgress" mkdir src\components\common\ScrollProgress
if not exist "src\components\common\ThemeToggle" mkdir src\components\common\ThemeToggle
if not exist "src\components\layout" mkdir src\components\layout
if not exist "src\components\layout\Navbar" mkdir src\components\layout\Navbar
if not exist "src\components\layout\Footer" mkdir src\components\layout\Footer
if not exist "src\components\sections" mkdir src\components\sections
if not exist "src\components\sections\Hero" mkdir src\components\sections\Hero
if not exist "src\components\sections\About" mkdir src\components\sections\About
if not exist "src\components\sections\Skills" mkdir src\components\sections\Skills
if not exist "src\components\sections\Experience" mkdir src\components\sections\Experience
if not exist "src\components\sections\Projects" mkdir src\components\sections\Projects
if not exist "src\components\sections\Education" mkdir src\components\sections\Education
if not exist "src\components\sections\TechStack" mkdir src\components\sections\TechStack
if not exist "src\components\sections\Achievements" mkdir src\components\sections\Achievements
if not exist "src\components\sections\Testimonials" mkdir src\components\sections\Testimonials
if not exist "src\components\sections\Contact" mkdir src\components\sections\Contact

:: ========== CONTEXT ==========
if not exist "src\context" mkdir src\context

:: ========== DATA ==========
if not exist "src\data" mkdir src\data

:: ========== STYLES ==========
if not exist "src\styles" mkdir src\styles

:: ========== CREATE PLACEHOLDER FILES ==========
echo. > src\components\common\BackToTop\BackToTop.jsx
echo. > src\components\common\Loader\Loader.jsx
echo. > src\components\common\Loader\Loader.css
echo. > src\components\common\ScrollProgress\ScrollProgress.jsx
echo. > src\components\common\ThemeToggle\ThemeToggle.jsx
echo. > src\components\layout\Navbar\Navbar.jsx
echo. > src\components\layout\Footer\Footer.jsx
echo. > src\components\sections\Hero\Hero.jsx
echo. > src\components\sections\Hero\ParticlesCanvas.jsx
echo. > src\components\sections\About\About.jsx
echo. > src\components\sections\Skills\Skills.jsx
echo. > src\components\sections\Experience\Experience.jsx
echo. > src\components\sections\Projects\Projects.jsx
echo. > src\components\sections\Education\Education.jsx
echo. > src\components\sections\TechStack\TechStack.jsx
echo. > src\components\sections\Achievements\Achievements.jsx
echo. > src\components\sections\Testimonials\Testimonials.jsx
echo. > src\components\sections\Contact\Contact.jsx
echo. > src\context\ThemeContext.jsx
echo. > src\data\skills.js
echo. > src\data\experience.js
echo. > src\data\projects.js
echo. > src\data\education.js
echo. > src\data\achievements.js
echo. > src\data\testimonials.js
echo. > src\data\socialLinks.js
echo. > src\data\contactInfo.js
echo. > src\data\techStack.js
echo. > src\styles\global.css
echo. > src\App.jsx
echo. > src\main.jsx

echo.
echo Folder structure and placeholder files created successfully!
echo Now copy the actual code from the migration guide into each file.
pause