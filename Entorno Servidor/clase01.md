# Arquitectura Web

- [Arquitectura Web](#arquitectura-web)
  - [Definiciones](#definiciones)
  - [URL](#url)
    - [Caracteres especiales](#caracteres-especiales)
  - [Arquitectura Cliente/Servidor](#arquitectura-clienteservidor)

Una aplicación web es transferencia de archivos HTML de un servidor a un cliente.

Se lanza la pregunta: ¿Si los servidores son cada vez más potentes, porqué no puedo correr código para generar el código HTML?

De esta forma no tenemos que crear a pelo todos los documentos HTML si no que los podemos crear sobre la marcha de forma dinámica en el propio servidor.

Ahora todo pasa por el protocolo HTTP.

El que manda y gestiona las partes delicadas (permisos, identificaciones, ...) de una aplicación es siempre el servidor. La parte cliente puede ser cambiada de forma *maliciosa*, pero la parte servidor es mucho más segura.

## Definiciones

| Siglas | Significado                 | Uso                                                |
| ------ | --------------------------- | -------------------------------------------------- |
| URI    | Uniform Resource Identifier | Forma de encontrar los recursos.                   |
| HTML   | HyperText Markup Language   | Forma de definir el contenido de la web.           |
| HTTP   | HyperText Transfer Protocol | Protocolo para comunicarse con el servidor.        |
| URL    | Uniform Resource Locator    | Forma de identificar un recurso en una red TCP/IP. |

## URL

``` plain
https://joana.aula03.fp-iesinfantaelena.educa.madid.org:80/camino
```

La coletilla `www` corresponde al nombre del host que es este caso es joana.

El puerto `:80` indica que queremos hablar con un servidor web. Por norma general no se pone ya que es el por defecto.

El `/camino` indica la ruta a seguir para encontrar el archivo deseado. Esta ruta se indica a partir de un *directorio virtual* que contiene todo a lo que puedo acceder desde la conexión establecida.

- Directorio físico: `\`
- Directorio virtual: `/`

``` plain
https://www.web.org/recurso?a=5&b=7
```

### Caracteres especiales

Son transformados antes de enviar la URL.

## Arquitectura Cliente/Servidor

Es una arquitectura software. En nuestro caso los clientes van a ser navegadores y los servidores son servidores web *(o de aplicaciones)*.

Todo se centraliza en el servidor lo cual quita dolores de cabeza a la hora de realizar actualizaciones y escalar la aplicación. Ya no hay que actualizar la aplicación cliente cada vez que se realiza algún cambio.

Apache en sus orígenes únicamente servía HTML, más tarde nace el proyecto TomCat para poder correr código java dentro de la máquina servidor. Apache pide los recursos y TomCat los compila.

TomCat es únicamente para java, para php se crearon módulos para que fuera el propio Apache el que lo pudiera correr.
