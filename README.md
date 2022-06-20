# Empieza a desarrolloar:

### Ambientación: crea el archivo .env dentro ingresa:

```bash
ENV=dev
```

### **bold**, `Con Docker`.

```bash
docker-compose up -d dev
```

### para producción

primero el siguiente comando para que genere la carpeta Dist

```bash
docker-compose up -d dev
```

```bash
docker-compose up -d pro
```

### `Sin Docker`.

```bash
1. npm i
2. npm run dev
```

### Documentación Componentes y paginas

Dentro del repositorio hay una carpeta **_src/Components_** donde se encuentran los componentes de la pagina, paso a explicar cada uno de ellos en total son **_7_**

También puede ver el siguiente link en youtube donde explico todo este **README** y uso de la app \*API de MARVEL\*\*:

[Duck Duck Go](https://duckduckgo.com).

**Introducción**
Single Page Aplication con REACT JS donde se trabaja con programación **reactiva**, la filosofia de este código y su comportamiento: Tenemos todas las carpteas en **src** donde análisamos cuantas paginas son necesarias para este caso solo hay una, pero de haber más paginas van dentro de la carpeta **pages** quienes son las que controlan a los layouts y compoentes, las paginas son algo más grande que componentes, y luego tenemos los compoentes descritos abajo.

**Pagina**
Para este caso solo hay una que controla a los demás componentes llamada Home

### Componentes

**Detail:**
Al dar click en un personaje de MARVEL se despliega el detalle del personaje, una descripción y un listado donde es relacionado como: series, historias, comics y eventos. Donde al dar click se muestran los titulos donde aparecen.
(PropsTypes): Un Id del personaje a cargar la información.

**Error**
Este componente controla los errores en grado caso un componente falle.

**Filter**
Su función es filtrar por categoria los topicos.

**Inputs**
Encargada de los inputs, select, search, etc. todo elemento de formulario.

**List**
Donde quiera que se visualize un listado de elementos se manda llamar este componente, que recibe como obligatorio (PropsTypes) un List Inmutable.

**Loader**
Cada petición al API se manda a llamar para mostrar visualmente que se estan cargando los datos

**Modal**
Mostar datos como modal que es utilizado en la pagina principal que hereda como hijo el componente detalle.
