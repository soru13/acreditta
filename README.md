# Prueba técnica:

### Ambientación: crea el archivo .env dentro ingresa:

```bash
ENV=dev
```

### Seguido de crear la carpeta en **node_modules** al mismo nivel (public y src):

```bash
node_modules
```

### `Con Docker`.

```bash
docker-compose up -d dev
```

### para producción

primero el siguiente comando para que genere la carpeta Dist

```bash
docker-compose up -d dev
```

Para puesta a produccion es obligatorio primero ejecutar el comando de arriba luego este

```bash
docker-compose up -d pro
```

### `Sin Docker`.

```bash
1. npm i
2. npm run dev
```

### para producción

```bash
1. npm i
2. npm run dll
3. npm run prod
```

La carpeta resultante **dist** es la que se pone en producción (resultado final)

### Documentación componentes y páginas

Dentro del repositorio hay una carpeta **_src/Components_** donde se encuentran los componentes de la página, paso a explicar cada uno de ellos en total son **_7_**

También puede ver el siguiente link en youtube donde explico todo este **README** y uso de la app **API de MARVEL**:

[Duck Duck Go](https://duckduckgo.com).

**Introducción**
Single Page Aplication con REACT JS donde se trabaja con programación **reactiva**, la filosofía de este código y su comportamiento: Tenemos todas las carpetas en **src** donde análizamos cuantas páginas son necesarias para este caso solo hay una, pero de haber más páginas van dentro de la carpetas **pages** quienes son las que controlan a los layouts y compoentes, las páginas son algo más grande que componentes, y luego tenemos los componentes descritos abajo.
git
**Página**
Para este caso solo hay una que controla a los demás componentes llamada Home

### Componentes

**Detail:**
Al dar click en un personaje de MARVEL se despliega el detalle del personaje, una descripción y un listado donde es relacionado como: series, historias, comics y eventos. Donde al dar click se muestran los títulos donde aparecen.
(PropsTypes): Un Id del personaje a cargar la información.

**Error**
Este componente controla los errores en grado caso un componente falle.

**Filter**
Su función es filtrar por categoría los tópicos.

**Inputs**
Encargada de los inputs, select, search, etc. todo elemento de formulario.

**List**
Donde quiera que se visualice un listado de elementos se manda llamar este componente, que recibe como obligatorio (PropsTypes) un List Inmutable.

**Loader**
Cada petición al API se manda a llamar para mostrar visualmente que se están cargando los datos

**Modal**
Mostrar datos como modal que es utilizado en la página principal que hereda como hijo el componente detalle.
