# clase 1

## Definiciones

### Arquitectura Web

Cómo se organizan los servicios entre ellos.

### Aplicación web

## Modelos

El modelo más extendido es el **cliente/servidor**, incluso en las redes **P2P** (peer to peer) suele haber servidores por ahí metidos.

Las redes cliente/servidor tienen una peculiaridad, casi siempre la comunicación la inicia el cliente.

**Servidores encadenados**: servidor web, de aplicaciones, de base de datos, ... Cuantas menos cosas estén conectadas a internet mejor. Un servidor está conectado a internet *(generalmente el servidor web)*, y conectados en serie todos los demás. Le haces una petición al servidor web, y este se encarga de gestionar lo que necesite y te devuelve el resultado.

## Arquitecturas

Arquitectura de tres niveles *(a no confundir con arquitectura de tres capas)*.

1. Nivel cliente (capa de presentación)
   - El nivel en el cual se queda el usuario.
2. Servidor web (capa de negocio)
   - La lógica por detrás necesaria para manejar el negocio.
3. Sistema de tratamiento de datos (capa de datos)
   - La información como tal que se maneja dentro del sistema.

La capa de **negocio** se puede dividir aparte en dos sub-capas:

1. Presentación: muéstrame los datos
2. Lógica de negocio: para cuando no hace falta mostrar nada (pide automáticamente el producto si nos quedan menos de X cajas)

La presentación suele cambiar mucho más a menudo que la lógica de abajo, por esto es lo por que nacen este tipo de divisiones.

### Multi-capa y multi-nivel

Estos dos términos pueden llegar a ser usados como sinónimos pero también se pueden usar para referirse a estos dos conceptos diferentes:

- Multi-nivel: cada elemento en una máquina diferente
- Multi-capa: dos o más elementos en una misma máquina

Un ejemplo de multi-capa es el modelo: Modelo modelo-vista-controlador:

- Modelo
- Vista: interfaz de usuario.
- Controlador: gestiona como se hablan los otros dos a través de eventos.

## Consideraciones

Una página estática es la misma para todos. No tiene comportamiento alguno. Un servidor web *técnicamente* sólo puede mostrar páginas web estáticas, para mostrar páginas dinámicas hace falta por ejemplo, php, y eso *técnicamente* le da funcionalidades de servidor de aplicación al servidor web.

- Un navegador web: pueden interpretar js y poco más
- Servidor web: interpretan php, java, python, ruby.
- Servidor de Aplicaciones: tomcat por ejemplo puede interpretar php

Un servidor XAMPP por ejemplo paquetiza todos los servidores de forma conjunta:

- un servidor web (Apache)
- servidor de aplicaciones (Tomcat)
- servidor de base de datos (MySql).

## Notas aparte

- lo más importante de un sistema informático es la información, el equipo se puede sustituir, perder la información te jode vivo.
- vamos a usar el modelo cliente-servidor
- Creemos que el cliente sabe lo que quiere mejor que el propio cliente *(y a la hora de la verdad realmente no importa)*. Una cosa es asesorar al cliente y otra cosa es imponer tus decisiones sobre él.
