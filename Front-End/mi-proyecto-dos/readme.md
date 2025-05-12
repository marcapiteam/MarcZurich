# 🧪 Test Automatizados - Zurich Empresas

Automatización de pruebas end-to-end con **WebdriverIO** para validar el flujo de login y búsqueda de agentes en el portal de Zurich Empresas.

---

## 📋 Escenarios Cubiertos

### 1. ❌ Login con credenciales erróneas
- DNI: `4444444X`, Contraseña: `Sabadell`
- Se espera: mensaje de error `"Tu usuario o contraseña es erróneo..."`

### 2. 🚫 Login sin contraseña
- DNI: `4444444X`, Contraseña vacía
- Se espera: campo contraseña resaltado en rojo (`.error`)

### 3. 🔍 Búsqueda de agente
- Click en botón "Buscar agente"
- Se espera: navegación a la sección de agentes

---

## 💻 Estructura Técnica

### Página: `home.page.ts`

Contiene selectores y métodos reutilizables:

- `btnAceptar`: aceptar cookies  
- `btnTuCuenta`: acceso al login  
- `inputUsername`, `inputPassword`: campos de acceso  
- `loginButton`: iniciar sesión  
- `cajaRoja`: error en campo  
- `btnAgente`: botón buscar agente

### Método: `login(dni, password)`
Automatiza el flujo de login básico.

---

## 🧪 Ejemplo de uso

```ts
await HomePage.login('4444444X', 'Sabadell');
await expect(HomePage.cajaRoja).toBeDisplayed();
