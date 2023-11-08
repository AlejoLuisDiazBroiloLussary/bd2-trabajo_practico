<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/2560px-Logo-redis.svg.png" alt="Redis Logo" width="200">

<hr>

## Grupo 4 - Documento sobre Redis

### Integrantes
- Maximo Blazquez
- Julian Rosas
- Bautista Cimatti
- Franco Ebner
- Agustin Odetti
- Alejo Diaz Broilo
<br>

### profesores

- Teodoro Reyna
- Juan Frattin
<hr>

## Indice

- [Introduccion](#Intro)
  -  [¿Qué es redis?](#que)
  -  [¿Para qué se usa?](#para_que)
  -  [ventajas y desventajas](#ventajas)
  -  [¿Quienes usan Redis?](#quienes)
- [¿Como funciona Redis?](#como)
  -  [Fundamentos Basicos](#basicos)
  -  [Escalabilidad](#escalabilidad)
  -  [Operaciones Atomicas en Redis](#atomicas)
-  [Intalacion de Redis](#instalacion)
   - [Linux](#linux)
   - [Windows](#windows)
-  [Conexión a Redis](#conexion)
-  [Ejemplios de conexiones en distintos lenguajes](#conexion_lenguajes)
   -  [Python](#python)
   -  [JavaScript](#javascript)
-  [Tipos de datos en redis](#tipos_datos)






<hr>

# Para empezar


## ¿Qué es redis? 

Redis es un sistema de almacenamiento en memoria de código abierto que se utiliza para almacenar y recuperar datos de manera eficiente.
<div style="background-color: lightgray; padding: 20px;">
  <p><b>Salvatore Sanfilippo</b>, también conocido como <b>"antirez"</b> en la comunidad de desarrollo, es el creador y principal desarrollador de Redis.</p>
  <hr> 
  <p> <b>Redis</b> fue creado en el año <b>2009</b>. <b>Redis</b> se popularizó debido a su <b>velocidad excepcional</b> y capacidad de almacenar y recuperar datos en memoria. Su <b>flexibilidad</b> en el manejo de estructuras de datos y su capacidad de ser utilizado en una amplia gama de aplicaciones, lo han convertido en una elección popular en el desarrollo de software. </p>
</div>
<br>

## ¿Para qué se usa? 
### Redis se emplea mayormente de las siguientes  maneras:</h5>

<br>
  <ul> 
    <li><u>Caché de datos</u>: Redis se utiliza como una capa de caché de datos para almacenar información en memoria y acelerar el acceso a datos frecuentemente utilizados en aplicaciones web y sistemas.
    <div style="background-color: rgb(209, 235, 209); padding: 10px;">
    <p>Proporciona procesamiento asincrónico rápido, programación de tareas, mensajes prioritarios y durabilidad opcional.</p>
    </div>
</li>
    <br>
    <li><u>Cola de mensajes</u>: Redis se emplea para implementar colas de mensajes, permitiendo la gestión de tareas en segundo plano y el procesamiento asincrónico.
    <div style="background-color: rgb(209, 235, 209); padding: 10px;">
    <p>Ofrece un rápido acceso a datos, escalabilidad, expiración de datos y manejo de estructuras de datos complejas.</p>
    </div></li>
    <br>
    <li><u>Sesiones de usuario</u>: 
    Redis es comúnmente utilizado para almacenar sesiones de usuario en aplicaciones web, rastreando la autenticación y el estado del usuario durante una sesión.
    <div style="background-color: rgb(209, 235, 209); padding: 10px;">
    <p> Ofrece alto rendimiento, escalabilidad, expiración de sesiones y soporte para aplicaciones web distribuidas.</p>
    </div>
</li>
    <br>
    <li><u>Sistemas de geoespacial</u>: Redis admite estructuras de datos geoespaciales que permiten realizar consultas y cálculos basados en la ubicación, lo que es útil en aplicaciones de seguimiento de ubicación y mapeo. 
    <div style="background-color: rgb(209, 235, 209); padding: 10px;">
    <p>Soporta estructuras geoespaciales, cálculos de proximidad y aplicaciones en tiempo real basadas en mapas.</p>
    </div></li>
  </ul>
<br>

## Ventajas y desventajas:

<div style="background-color: rgb(187, 233, 187); padding: 20px;">
<h3><u>Ventajas de usar Redis</u>:</h3>
<ul>
  <li>Redis es muy rápido y puede realizar alrededor de 110,000 operaciones SET por segundo y alrededor de 81,000 operaciones GET por segundo.</li>
  <br>
  <li>Redis admite una amplia variedad de tipos de datos, como listas, conjuntos y tablas hash, lo que facilita la resolución de diversos problemas. Su versatilidad ayuda a elegir el tipo de dato adecuado para cada situación.</li>
  <br>
  <li>Todas las operaciones en Redis son atómicas, lo que garantiza que si dos clientes acceden concurrentemente, el servidor Redis recibirá el valor actualizado.</li>
  <br>
  <li>Redis es versátil y puede usarse en múltiples casos, como caché, colas de mensajes y sesiones de aplicaciones web, entre otros. También admite Publicar/Suscribir para aplicaciones de mensajería.</li>
</ul>
</div>
<br>



<div style="background-color: rgb(241, 175, 175); padding: 20px;">
<h3><u>Desventajas de usar Redis</u>:</h3>
<ul>
  <li>Redis almacena datos en memoria, por lo que su capacidad está limitada por la RAM del servidor, lo que puede ser un desafío para aplicaciones con grandes volúmenes de datos.</li>
  <br>
  <li>Redis puede perder datos al reiniciar si la persistencia no se configura adecuadamente, por lo que es importante tomar medidas como snapshots o registros de cambios para evitar esta pérdida.</li>
  <br>
  <li>La configuración y administración de Redis pueden ser complejas, especialmente en entornos de alta disponibilidad y escalabilidad, donde la configuración de clústeres o alta disponibilidad puede ser desafiante.</li>
  <br>
  <li>Redis carece de soporte para consultas avanzadas o búsquedas basadas en contenido, ya que se centra en recuperar datos mediante claves, a diferencia de las bases de datos relacionales.</li>
  <br>
  <li>A medida que los datos aumentan, la RAM requerida para Redis también aumenta, lo que puede resultar en costos más altos para hardware y recursos.</li>
  <br>
  <li>Si se requiere persistencia en disco, las operaciones de escritura pueden ser costosas en términos de rendimiento, ya que Redis debe sincronizar los datos en memoria con el almacenamiento en disco.</li>
</ul>

</div>
<br>

## ¿Quienes usan Redis?
Es una base de datos en memoria ampliamente utilizada por muchas empresas y organizaciones en todo el mundo debido a su rendimiento y capacidad para acelerar aplicaciones y servicios en tiempo real. Aquí hay una lista de algunas empresas conocidas que utilizan Redis en sus aplicaciones y sistemas:

- Twitter
- GitHub
- Snapchat
- Trello
- StackOverflow
<hr>

# ¿Cómo funciona Redis? 

## Fundamentos basicos:

Redis es una base de datos en memoria que funciona almacenando datos en la RAM para un acceso rápido. Redis tiene 3 factores claves que explican el origen de su velocidad de procesamiento:

<ul>
  <li>In memory DB:
    <ul>
  <li>Los datos dentro de una base de datos de Redis están almacenados en la memoria RAM, la cual tiene una velocidad de lectura medida en nanosegundos, a diferencia de las operaciones de lectura y escritura E/S en los discos duros, las cuales comúnmente se miden en milisegundos.
  </li>
  <br>
  <li>Otro apartado a tener en cuenta de este método de almacenamiento de datos es que se eliminan operaciones innecesarias o redundantes. Para ser más preciso, en las Bases de Datos en Disco cuando se hace una consulta, los datos primero son extraídos del disco duro para luego ser alojados en la memoria antes de ser procesados. Como los datos almacenados ya están guardados en la memoria ram, nos saltamos esta operación tan demandante y nos ahorramos el tiempo de “fetching” y “loading” de los mismos (toda la información está siempre disponible para que el procesador la lea).
  </li>
  </ul>
  </li>
  <br>

  <li>multiplexación de operaciones de entrada/salida y lectura/escritura monohilo:
  <ul>
  <li>El hecho que un procesamiento monohilo sea así de veloz puede ser un poco no-intuitivo, lo que hay que tener en cuenta de este modelo de procesamiento de datos es que se evitan problemas de sincronización y contención de hilos, evitando bloqueos y una mayor exigencia al procesador para la administración de hilos.
  </li>
  <br>
  <li>Uno pensaría que al tener un solo hilo trabajando este se congestiona con las demoras en el procesamiento de datos, para solventar esto se utiliza la “multiplexación de operaciones de entrada/salida”:
  </li>
  <br>

  <li>El multiplexing en Redis se refiere al proceso de administrar múltiples conexiones de red concurrentes en un solo hilo de ejecución (monohilo) de Redis. Esto se logra utilizando un bucle de eventos que monitorea múltiples sockets de red y realiza operaciones de lectura y escritura de manera no bloqueante. Esto funcionaria de la siguiente manera:
  <ol>
  <br>
    <li>
    El bucle de eventos de Redis, también conocido como bucle principal, comienza a ejecutarse. Este bucle consta de dos fases principales: una fase de espera de eventos y una fase de procesamiento de eventos.
    </li>
    <br>
    <li>
    El bucle de eventos se bloquea y espera a que ocurran eventos en las conexiones de clientes, como datos disponibles para lectura o capacidad de escritura en los sockets.
    </li>
    <br>
    <li>
    Una vez que ocurre un evento, el bucle de eventos desbloquea y procesa el evento. Puede ser una solicitud de cliente para escribir datos, una solicitud para leer datos o incluso un nuevo cliente que intenta conectarse.  La clave del multiplexing en Redis es que las operaciones de lectura y escritura en las conexiones se realizan de manera no bloqueante. Esto significa que el hilo no se bloquea esperando una operación de E/S para completarse, el hilo pasa a la siguiente conexión para atender otros eventos.
    </li>
    <br>
    <li>
    Cuando se realiza una solicitud, Redis procesa la solicitud y envía la respuesta al cliente. Esto puede incluir la recuperación de datos, actualizaciones en la base de datos en memoria de Redis, o cualquier otra operación específica del cliente.
    </li>
    <br>
    <li>
    Una vez que se ha atendido un evento, el bucle de eventos repite el proceso de espera y procesamiento, manejando múltiples conexiones de forma concurrente.
    </li>
  </ol>
  </li>
  
  </ul>
  </li>
  <br>
  <div style="background-color: lightgray; padding: 20px;">
  Una cosa a tener en cuenta del “single threading” es que no se explota toda la potencia del procesador, por lo que es práctica común el tener varias instancias de redis siendo procesadas en distintos núcleos.
</div>
<br>
<li>
Estructura de data eficiente:
<ul>
  <li>
  Debido a que redis es una base de datos almacenada en la memoria este se puede aprovechar de varias “low-level” estructuras de datos sin tener que preocuparnos de pasarlas al disco de manera eficiente (como los datos están almacenados en la memoria, no se tiene que tener las mismas consideraciones que con el disco). algunos ejemplos de estas estructuras serían:
  </li>
</ul>
</li>
</ul>

## Escalabilidad:
<br>

La escalabilidad en el contexto de Redis se refiere a la capacidad de esta base de datos para manejar un aumento en la carga de trabajo o en la cantidad de datos que necesita gestionar, sin que eso afecte negativamente su rendimiento o su disponibilidad. Esto se logra mediante la posibilidad de agregar más recursos (como servidores) para distribuir la carga, lo que se conoce como escalabilidad horizontal.

<br>
En casos de aumento considerable de trafico, en lugar de intentar hacer que un solo servidor Redis haga todo el trabajo, puedes optar por escalar Redis horizontalmente.

<br>
Para hacerlo, se puede agregar más servidores Redis a tu entorno. Estos nuevos servidores trabajan en conjunto y distribuyen la carga de manera equitativa. Cada servidor maneja una parte de los productos o datos, y cuando un usuario realiza una solicitud, puede dirigirse a cualquiera de los servidores. Esto distribuye la carga de manera uniforme y garantiza que cada servidor Redis pueda responder rápidamente a las solicitudes.

<br>

## Operaciones Atómicas en Redis:

Las operaciones atómicas en Redis son operaciones que se realizan de manera indivisible e inmutable, lo que significa que no se pueden dividir en pasos más pequeños y garantizan que se ejecutarán completamente o no se ejecutarán en absoluto. Redis proporciona una serie de operaciones atómicas que son esenciales para garantizar la consistencia de los datos en entornos de concurrencia.

<ol>
<li>
<b>SET</b>: La operación <b>SET</b> se utiliza para establecer el valor de una clave en Redis. Es una operación atómica en el sentido de que reemplaza el valor existente de la clave con el nuevo valor proporcionado. Si la clave ya existe, el valor anterior se sobrescribe por completo.
Ejemplo:

</li>
<br>
<li>
<b>GETSET</b>: La operación <b>GETSET</b> se utiliza para establecer un nuevo valor y obtener el valor anterior de una clave en una sola operación. Esto es útil cuando necesitas actualizar una clave y, al mismo tiempo, obtener el valor anterior.</li>
<br>
<li>
<b>INCR</b> e <b>INCRBY</b>: Las operaciones <b>INCR</b> e <b>INCRBY</b> se utilizan para incrementar el valor de una clave numérica en 1 o una cantidad específica, respectivamente. Estas operaciones son atómicas y garantizan que el valor se incremente sin posibles condiciones de carrera.
</li>
<br>
<li>
<b>DECR</b> y <b>DECRBY</b>: Estas operaciones son similares a <b>INCR</b> e <b>INCRBY</b>, pero disminuyen el valor en lugar de aumentarlo.
</li>
<br>
<li>
<b>APPEND</b>: La operación <b>APPEND</b> se utiliza para concatenar un valor a una clave de tipo cadena. Es una operación atómica que garantiza que la cadena se modifique sin problemas.
</li>
<br>
<li>
<b>HSET</b>: La operación <b>HSET</b> se utiliza para establecer el valor de un campo en un hash. Es una operación atómica que modifica o crea el campo en el hash.
</li>
<br>
<li>
<b>LPUSH</b> y <b>RPUSH</b>: Las operaciones <b>LPUSH</b> y <b>RPUSH</b> se utilizan para agregar un elemento al principio (izquierda) o al final (derecha) de una lista, respectivamente. Son operaciones atómicas que garantizan la integridad de la lista.
</li>
<br>
<li>
<b>SADD</b> y <b>SREM</b>: Las operaciones <b>SADD</b> y <b>SREM</b> se utilizan para agregar o eliminar miembros de un conjunto. Son operaciones atómicas que modifican el conjunto de manera segura.
</li>
<br>
<li>
<b>ZADD</b> y <b>ZREM</b>: Las operaciones <b>ZADD</b> y <b>ZREM</b> se utilizan para agregar o eliminar elementos de un conjunto ordenado. Al igual que con otros tipos de conjuntos, estas operaciones son atómicas.
</li>
<br>
<li>
<b>BITOP</b>: La operación <b>BITOP</b> se utiliza para realizar operaciones a nivel de bits en cadenas binarias. A pesar de su naturaleza de operación de bits, es una operación atómica.
</li>
</ol>
<br>
<div style="background-color: lightgray; padding: 20px;">
  Estas operaciones son fundamentales para garantizar la consistencia de los datos en Redis en entornos de concurrencia. Puedes utilizar estas operaciones para realizar cambios en los datos de manera segura y sin preocuparte por conflictos
</div>

<hr>

# Instalacion de Redis:

## Linux

Se puede instalar versiones estables recientes de Redis desde el repositorio APT oficial packages.redis.io.

Si estás ejecutando una distribución mínima (como un Docker), es posible que primero necesite instalar lsb-release, curl y gpg:

- sudo apt install lsb-release curl gpg

Agregue el repositorio al apt index, actualícelo y luego instale:

- curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

- echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

- sudo apt-get update
- sudo apt-get install redis

En linux tambien podes instalar redis vía Snapcraft:

- sudo snap install redis

Si no tenesSnapcraft lo podes instalar desde el siguiente link:
https://snapcraft.io/snapcraft


## Windows:

En windows es más complicado ya que no es compatible, para poder tenerlo en windows tenes que descargar WSL2 (Windows Subsystem for Linux). WSL2 como dice el nombre básicamente te permite abrir la consola de linux. 


Una vez que tenemos WSL2 funcionando lo instalamos de la misma manera que en linux.

<hr>

# Conexion a redis:

## Selección del Cliente:
<ul>
En primer lugar, debes seleccionar un cliente Redis adecuado para tu lenguaje de programación. Redis tiene una amplia variedad de clientes disponibles, lo que facilita la integración con tu aplicación.
</ul>

## Configuración de la Conexión:

<ul>
Debes configurar los parámetros de conexión, como la dirección IP o el nombre de host del servidor Redis y el número de puerto en el que se está ejecutando Redis. Además, si tu servidor Redis requiere autenticación, debes proporcionar las credenciales necesarias.
</ul>

## Inicialización del Cliente:

<ul>
Crear una instancia del cliente Redis en tu aplicación es el siguiente paso. Esto se hace utilizando las funciones o clases proporcionadas por la biblioteca del cliente Redis en tu lenguaje.
</ul>

## Establecer la Conexión:

<ul>
Una vez que se ha creado la instancia del cliente, debes establecer la conexión con el servidor Redis. Esto implica que el cliente abrirá una conexión de red con el servidor y estará listo para enviar comandos.
</ul>

## Enviar Comandos y Recibir Respuestas:

<ul>
Con la conexión establecida, puedes enviar comandos Redis al servidor utilizando el cliente. Los comandos incluyen operaciones como SET, GET, HSET, LPUSH, etc. Cada comando tiene una función específica en Redis. Cuando envías un comando, el cliente lo traduce a la forma adecuada para comunicarse con Redis a través del protocolo de Redis. El servidor Redis procesa el comando y envía una respuesta al cliente.
</ul>

## Recibir y Procesar Respuestas:

<ul>
Las respuestas del servidor Redis son procesadas por el cliente y se devuelven a tu aplicación. Las respuestas pueden ser valores simples, estructuras de datos o información de estado. Tu aplicación procesa estas respuestas según sea necesario.
</ul>

## Cerrar la Conexión

<ul>
Una vez que hayas terminado de interactuar con Redis, es una buena práctica cerrar la conexión al servidor para liberar recursos y mantener la integridad de la conexión.
</ul>

<hr>

# Ejemplos de conexiones en distintos lenguajes

## Python

Para inicializar una conexión en Python, debes usar el cliente Redis `redis-py`. Asegúrate de que primero hayas instalado el cliente usando pip (`pip install redis`).

- import redis

Configura la conexión a Redis

- redis_host = 'localhost'  # Host o dirección IP del servidor Redis

- redis_port = 6379  # Puerto en el que Redis está escuchando

- redis_password = None  # Contraseña (si es necesario)

Inicializa el cliente Redis

- redis_client = redis_client = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password) 

Ahora puedes usar redis_client para enviar comandos a Redis

## JavaScript (Node.js) - Usando `ioredis`:

Para inicializar una conexión en Node.js, puedes utilizar el cliente Redis `ioredis`. Asegúrate de que primero hayas instalado el cliente usando npm (`npm install ioredis`).

- const Redis = require('ioredis');

Configura la conexión a Redis

- const redisHost = 'localhost';
- const redisPort = 6379;
- const redisPassword = null; // Contraseña (si es necesario)

Inicializa el cliente Redis

- const redisClient = new Redis({
    host: redisHost,
    port: redisPort,
    password: redisPassword,
});

Ahora puedes usar redisClient para enviar comandos a Redis.

<hr>

# Tipos de datos en Redis

Redis es conocido por su flexibilidad en cuanto a las estructuras de datos que ofrece. A diferencia de otros sistemas de almacenamiento de clave-valor más simples, Redis proporciona una variedad de tipos de datos que permiten a los desarrolladores abordar una amplia gama de problemas y aplicaciones.

<ul>
<b>Cadenas</b>: Puedes almacenar datos de texto o binarios de hasta 512 MB de tamaño en cadenas. Esto es útil para una amplia variedad de casos de uso, desde simples valores clave hasta datos más complejos.

- SET miClave "Hola, Redis"
- GET miClave

<br>

<b>Listas</b>: Las listas son colecciones de cadenas que se mantienen en el orden en que se agregaron. Esto es útil para implementar estructuras de datos como colas y pilas.

- LPUSH miLista "Manzana" "Banana" "Cereza"

- LRANGE miLista 0 - 1

<b>Conjuntos</b>: Los conjuntos son colecciones desordenadas de cadenas, y permiten operaciones como intersección, unión y diferencia con otros conjuntos.

- SADD miConjunto "Rojo" "Verde" "Azul"
- SISMEMBER miConjunto "Rojo"

<br>
<b>Conjuntos ordenados</b>: Estos son conjuntos en los que cada elemento está asociado con un valor (puntuación) y se mantienen ordenados por ese valor. Esto es útil para implementar clasificaciones y rangos.

- ZADD miConjuntoOrdenado 10 "Manzana" 5 "Banana" 8 "Cereza"
- ZRANGE miConjuntoOrdenado 0 -1

<br>
<b>Hashes</b>: Los hashes son estructuras de datos que almacenan una lista de campos y valores asociados. Son útiles para representar objetos o registros con múltiples atributos.

- HSET miHash Nombre "Juan" Edad 30 Ciudad "Nueva York"

- HGET miHash Nombre

<b>Mapas de bits</b>: Este tipo de datos permite realizar operaciones a nivel de bits, lo como establecer, borrar o contar bits individuales en una cadena de bits. Esto es útil para ciertos casos de uso que requieren manipulación a nivel de bits.

- SETBIT miMapaDeBits 5 1
- BITCOUNT miMapaDeBits

<br>

<b>HyperLogLogs</b>: Son estructuras de datos probabilísticas que se utilizan para estimar la cardinalidad de un conjunto, es decir, cuántos elementos únicos hay en un conjunto de datos. Son útiles para contar elementos únicos en grandes conjuntos de datos.

- PFADD miHyperLogLog "Elemento1" "Elemento2" "Elemento3"
- PFCOUNT miHyperLogLog

<br>

<b>Secuencias</b>(Streams): Las secuencias son estructuras de datos de registro que se utilizan para implementar colas de mensajes. Son útiles en escenarios donde se necesita un procesamiento en tiempo real de eventos secuenciales.

- XADD miSecuencia * Nombre "Juan" Edad 30
- XREAD COUNT 1 BLOCK 0 STREAMS miSecuencia 0

<br>
<b>Geoespacial</b>: Redis admite mapas de entradas basados en longitud y latitud, lo que es útil en aplicaciones de geolocalización, seguimiento de ubicación y mapeo.


- GEOADD miMapaGeoespacial 13.361389 38.115556 "CiudadA" 15.087269 37.502669 "CiudadB"
- GEORADIUS miMapaGeoespacial 15 37 100 km
</ul>