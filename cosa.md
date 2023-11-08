![](RackMultipart20231108-1-fn2vkn_html_ea5174ce544871ca.png)

Redis es una base de datos de código abierto con licencia BSD que actúa como base de datos, caché, intermediario de mensajes y motor de transmisión. Ofrece una variedad de estructuras de datos, como cadenas, listas, conjuntos, conjuntos ordenados, mapas de bits, hiperloglogs, índices geoespaciales y flujos. Redis es conocido por su alto rendimiento y se utiliza en diversas aplicaciones.

Usando redis podes ejecutar operaciones atómicas, como agregar a una cadena; incrementar el valor en un hash; empujar un elemento a una lista; computación de intersección, unión y diferencia de conjuntos; u obtener el miembro con la clasificación más alta en un conjunto ordenado.

Para alcanzar el máximo rendimiento, Redis trabaja con un conjunto de datos en memoria. Dependiendo de su caso de uso, Redis puede conservar sus datos volcando periódicamente el conjunto de datos en el disco o agregando cada comando a un registro basado en disco. También puede deshabilitar la persistencia si solo necesita un caché en memoria, en red y con muchas funciones.Redis se emplea mayormente de las siguientes maneras:

Redis admite replicación asincrónica, con sincronización rápida sin bloqueo y reconexión automática con resincronización parcial en división de red.

**Cómo funciona Redis:**

Redis tiene 3 factores claves que explican el origen de su velocidad de procesamiento:

- In memory DB:

Los datos dentro de una base de datos de Redis están almacenados en la memoria RAM, la cual tiene una velocidad de lectura medida en nanosegundos, a diferencia de las operaciones de lectura y escritura E/S en los discos duros, las cuales comúnmente se miden en milisegundos.

Otro apartado a tener en cuenta de este método de almacenamiento de datos es que se eliminan operaciones innecesarias o redundantes. Para ser más preciso, en las Bases de Datos en Disco cuando se hace una consulta, los datos primero son extraídos del disco duro para luego ser alojados en la memoria antes de ser procesados. Como los datos almacenados ya están guardados en la memoria ram, nos saltamos esta operación tan demandante y nos ahorramos el tiempo de "fetching" y "loading" de los mismos (toda la información está siempre disponible para que el procesador la lea).

- multiplexación de operaciones de entrada/salida y lectura/escritura monohilo:

El hecho que un procesamiento monohilo sea así de veloz puede ser un poco no-intuitivo, lo que hay que tener en cuenta de este modelo de procesamiento de datos es que se evitan problemas de sincronización y contención de hilos, evitando bloqueos y una mayor exigencia al procesador para la administración de hilos.

Uno pensaría que al tener un solo hilo trabajando este se congestiona con las demoras en el procesamiento de datos, para solventar esto se utiliza la "multiplexación de operaciones de entrada/salida":

El multiplexing en Redis se refiere al proceso de administrar múltiples conexiones de red concurrentes en un solo hilo de ejecución (monohilo) de Redis. Esto se logra utilizando un bucle de eventos que monitorea múltiples sockets de red y realiza operaciones de lectura y escritura de manera no bloqueante. Esto funcionaria de la siguiente manera:

1. El bucle de eventos de Redis, también conocido como bucle principal, comienza a ejecutarse. Este bucle consta de dos fases principales: una fase de espera de eventos y una fase de procesamiento de eventos.
2. El bucle de eventos se bloquea y espera a que ocurran eventos en las conexiones de clientes, como datos disponibles para lectura o capacidad de escritura en los sockets.
3. Una vez que ocurre un evento, el bucle de eventos desbloquea y procesa el evento. Puede ser una solicitud de cliente para escribir datos, una solicitud para leer datos o incluso un nuevo cliente que intenta conectarse. La clave del multiplexing en Redis es que las operaciones de lectura y escritura en las conexiones se realizan de manera no bloqueante. Esto significa que el hilo no se bloquea esperando una operación de E/S para completarse, el hilo pasa a la siguiente conexión para atender otros eventos.
4. Cuando se realiza una solicitud, Redis procesa la solicitud y envía la respuesta al cliente. Esto puede incluir la recuperación de datos, actualizaciones en la base de datos en memoria de Redis, o cualquier otra operación específica del cliente.
5. Una vez que se ha atendido un evento, el bucle de eventos repite el proceso de espera y procesamiento, manejando múltiples conexiones de forma concurrente.

Una cosa a tener en cuenta del "single threading" es que no se explota toda la potencia del procesador, por lo que es práctica común el tener varias instancias de redis siendo procesadas en distintos núcleos.

- Estructura de data eficiente:

Debido a que redis es una base de datos almacenada en la memoria este se puede aprovechar de varias "low-level" estructuras de datos sin tener que preocuparnos de pasarlas al disco de manera eficiente (como los datos están almacenados en la memoria, no se tiene que tener las mismas consideraciones que con el disco). algunos ejemplos de estas estructuras serían:

- linked list.
- skip list.
- hashes.
- etc…

**Redis se emplea mayormente de las siguientes maneras:**

1. Caché de Datos

Uso: Redis se utiliza como una capa de caché de datos para almacenar información en memoria y acelerar el acceso a datos frecuentemente utilizados en aplicaciones web y sistemas.

Ventajas: Ofrece un rápido acceso a datos, escalabilidad, expiración de datos y manejo de estructuras de datos complejas.

2. Cola de Mensajes

Uso: Redis se emplea para implementar colas de mensajes, permitiendo la gestión de tareas en segundo plano y el procesamiento asincrónico.

Ventajas: Proporciona procesamiento asincrónico rápido, programación de tareas, mensajes prioritarios y durabilidad opcional.

3. Sesiones de Usuario

Uso: Redis es comúnmente utilizado para almacenar sesiones de usuario en aplicaciones web, rastreando la autenticación y el estado del usuario durante una sesión.

Ventajas: Ofrece alto rendimiento, escalabilidad, expiración de sesiones y soporte para aplicaciones web distribuidas.

4. Sistemas de Geoespacial

Uso: Redis es adecuado para aplicaciones que requieren el manejo de datos geoespaciales, como seguimiento de ubicación, mapeo y geolocalización.

Ventajas: Soporta estructuras geoespaciales, cálculos de proximidad y aplicaciones en tiempo real basadas en mapas.

**Empresas que utilizan Redis:**

Redis es una base de datos en memoria ampliamente utilizada por muchas empresas y organizaciones en todo el mundo debido a su rendimiento y capacidad para acelerar aplicaciones y servicios en tiempo real. Aquí hay una lista de algunas empresas conocidas que utilizan Redis en sus aplicaciones y sistemas:

- Twitter
- GitHub
- Snapchat
- Trello
- StackOverflow

**Historia de Redis:**

Redis, que significa "REmote DIctionary Server", es una base de datos en memoria que ha experimentado una evolución significativa desde su creación. Fue desarrollado por Salvatore Sanfilippo, un programador italiano, quien comenzó a trabajar en el proyecto en el año 2009. A lo largo de los años, Redis se ha convertido en una de las bases de datos en memoria más populares y se ha ganado un lugar destacado en el mundo del software de código abierto.

Redis se originó a partir de la necesidad de una base de datos en memoria que fuera rápida, eficiente y que pudiera manejar una amplia variedad de estructuras de datos. Salvatore Sanfilippo, también conocido como "antirez" en la comunidad de desarrolladores, comenzó el proyecto como un esfuerzo personal para abordar estos desafíos. Su objetivo era crear una base de datos que fuera capaz de manejar casos de uso que iban más allá de las capacidades de las bases de datos relacionales y otros sistemas de almacenamiento.

El diseño inicial de Redis se centró en ofrecer un sistema en memoria de alto rendimiento que pudiera actuar como una base de datos clave-valor y un sistema de almacenamiento en caché. Redis ofrecía una variedad de estructuras de datos, como cadenas, listas, conjuntos y mapas de bits, que permitían a los desarrolladores abordar una amplia gama de problemas de almacenamiento y recuperación de datos de manera eficiente. Una de las razones clave detrás del éxito de Redis es su naturaleza de código abierto y la participación activa de la comunidad de desarrolladores. A lo largo de los años, muchos contribuyentes han trabajado en la mejora y expansión de Redis. La comunidad de código abierto también desempeñó un papel importante en la evolución de Redis, contribuyendo a su madurez y adición de nuevas características.

En 2015, Redis dio un gran paso adelante con el lanzamiento de Redis Cluster, una característica que permitía la escalabilidad horizontal y la alta disponibilidad al dividir los datos en múltiples nodos. Esto hizo que Redis fuera adecuado para aplicaciones empresariales que requerían escalabilidad y tolerancia a fallos.

Otra mejora significativa en esta época fue la adición de opciones de durabilidad. Inicialmente, Redis solo almacenaba datos en memoria, lo que lo hacía vulnerable a la pérdida de datos en caso de fallo del sistema. Con la introducción de la persistencia en disco, Redis se volvió más seguro para aplicaciones críticas, permitiendo la recuperación de datos incluso después de un reinicio.

En 2016, Redis lanzó el concepto de "módulos", lo que permitió a los desarrolladores ampliar las capacidades de Redis de formas personalizadas. Esto abrió nuevas posibilidades para adaptar Redis a aplicaciones específicas y necesidades empresariales. Los módulos permitieron la creación de extensiones como RediSearch, RedisGraph y RedisJSON, lo que permitió a Redis convertirse en una plataforma de datos en memoria aún más poderosa.

Redis ha seguido evolucionando y manteniendo su posición como una de las bases de datos en memoria más populares y utilizadas en todo el mundo. Su versatilidad, alta velocidad y capacidad de adaptación a diferentes casos de uso la han convertido en una herramienta esencial en el ecosistema de desarrollo de software moderno.

Hoy en día, Redis sigue siendo una tecnología clave en aplicaciones de alta velocidad, análisis de datos en tiempo real, almacenamiento en caché, colas de mensajes y más. Su historia y evolución reflejan la importancia de la innovación continua en el mundo de las bases de datos y la informática en memoria.

**Operaciones Atómicas en Redis:**

Las operaciones atómicas en Redis son operaciones que se realizan de manera indivisible e inmutable, lo que significa que no se pueden dividir en pasos más pequeños y garantizan que se ejecutarán completamente o no se ejecutarán en absoluto. Redis proporciona una serie de operaciones atómicas que son esenciales para garantizar la consistencia de los datos en entornos de concurrencia.

1. SET: La operación SET se utiliza para establecer el valor de una clave en Redis. Es una operación atómica en el sentido de que reemplaza el valor existente de la clave con el nuevo valor proporcionado. Si la clave ya existe, el valor anterior se sobrescribe por completo.

Ejemplo:

SET mykey "Hello"

1. GETSET: La operación GETSET se utiliza para establecer un nuevo valor y obtener el valor anterior de una clave en una sola operación. Esto es útil cuando necesitas actualizar una clave y, al mismo tiempo, obtener el valor anterior.

Ejemplo:

GETSET mykey "NewValue"

1. INCR e INCRBY: Las operaciones INCR e INCRBY se utilizan para incrementar el valor de una clave numérica en 1 o una cantidad específica, respectivamente. Estas operaciones son atómicas y garantizan que el valor se incremente sin posibles condiciones de carrera.

Ejemplo:

INCR counter

1. DECR y DECRBY: Estas operaciones son similares a INCR e INCRBY, pero disminuyen el valor en lugar de aumentarlo.

Ejemplo:

DECR counter

1. APPEND: La operación APPEND se utiliza para concatenar un valor a una clave de tipo cadena. Es una operación atómica que garantiza que la cadena se modifique sin problemas.

Ejemplo:

APPEND mystring " World"

1. HSET: La operación HSET se utiliza para establecer el valor de un campo en un hash. Es una operación atómica que modifica o crea el campo en el hash.

Ejemplo:

HSET user:id1 name "John"

1. LPUSH y RPUSH: Las operaciones LPUSH y RPUSH se utilizan para agregar un elemento al principio (izquierda) o al final (derecha) de una lista, respectivamente. Son operaciones atómicas que garantizan la integridad de la lista.

Ejemplo:

LPUSH mylist "item1"

1. SADD y SREM: Las operaciones SADD y SREM se utilizan para agregar o eliminar miembros de un conjunto. Son operaciones atómicas que modifican el conjunto de manera segura.

Ejemplo:

SADD myset "member1"

1. ZADD y ZREM: Las operaciones ZADD y ZREM se utilizan para agregar o eliminar elementos de un conjunto ordenado. Al igual que con otros tipos de conjuntos, estas operaciones son atómicas.

Ejemplo:

ZADD leaderboard 100 "player1"

1. BITOP: La operación BITOP se utiliza para realizar operaciones a nivel de bits en cadenas binarias. A pesar de su naturaleza de operación de bits, es una operación atómica.

Ejemplo:

BITOP AND result mykey1 mykey2

Estas operaciones son fundamentales para garantizar la consistencia de los datos en Redis en entornos de concurrencia. Puedes utilizar estas operaciones para realizar cambios en los datos de manera segura y sin preocuparte por conflictos

**¿Que es una base de datos Nosql?**

Las bases de datos NoSQL(Not only SQL) es un tipo de sistema de gestión de bases de datos que difiere significativamente de las bases de datos relacionales tradicionales (SQL). Estos tipos de bases de datos están optimizados específicamente para aplicaciones que requieren grandes volúmenes de datos, baja latencia y modelos de datos flexibles, lo que se logra mediante la flexibilización de algunas de las restricciones de coherencia de datos en otras bases de datos.

A continuación una comparación de cómo sería una base de datos Nosql frente a una SQL:

En una base de datos relacional, un registro de libros a menudo se normaliza y se almacena en tablas separadas, y las relaciones se definen mediante restricciones de claves primarias y externas. En este ejemplo, la tabla Libros tiene las columnas ISBN, Título del libro y Número de edición, la tabla Autores tiene las columnas IDAutor y Nombre de autor y, finalmente, la tabla Autor-ISBN tiene las columnas IDAutor e ISBN. El modelo relacional está diseñado para permitir que la base de datos aplique la integridad referencial entre tablas en la base de datos, normalizada para reducir la redundancia y, generalmente, está optimizada para el almacenamiento.

En una base de datos NoSQL, el registro de un libro generalmente se almacena como un documento JSON. Para cada libro, el elemento, ISBN, Título del libro, Número de edición, Nombre autor y IDAutor se almacenan como atributos en un solo documento. En este modelo, los datos están optimizados para un desarrollo intuitivo y escalabilidad horizontal.

**¿Por qué debería utilizar una base de datos Nosql?**

Las bases de datos NoSQL se adaptan perfectamente a muchas aplicaciones modernas, como dispositivos móviles, web y juegos, que requieren bases de datos flexibles, escalables, de alto rendimiento y altamente funcionales para proporcionar excelentes experiencias de usuario.

**Flexibilidad:** las bases de datos NoSQL generalmente ofrecen esquemas flexibles que permiten un desarrollo más rápido y más iterativo. El modelo de datos flexible hace que las bases de datos NoSQL sean ideales para datos semiestructurados y no estructurados.

**Escalabilidad:** las bases de datos NoSQL generalmente están diseñadas para escalar usando clústeres distribuidos de hardware en lugar de escalar añadiendo servidores caros y sólidos. Algunos proveedores de la nube manejan estas operaciones en segundo plano, como un servicio completamente administrado.

**Alto rendimiento** : la base de datos NoSQL está optimizada para modelos de datos específicos y patrones de acceso que permiten un mayor rendimiento que el intento de lograr una funcionalidad similar con bases de datos relacionales.

**Altamente funcional:** las bases de datos NoSQL proporcionan API altamente funcionales y tipos de datos que están diseñados específicamente para cada uno de sus respectivos modelos de datos.

**¿Qué tipo de base de datos Nosql existen?**

Existen varios tipos de base de datos nosql, son los siguientes:

- **Clave-valor:** las bases de datos clave-valor son altamente divisibles y permiten escalado horizontal a escalas que otros tipos de bases de datos no pueden alcanzar. Los casos de uso como juegos, tecnología publicitaria e IoT se prestan particularmente bien con el modelo de datos clave-valor.

- **Documentos** : en el código de aplicación, los datos se representan a menudo como un objeto o un documento de tipo JSON porque es un modelo de datos eficiente e intuitivo para los desarrolladores. Las bases de datos de documentos facilitan a los desarrolladores el almacenamiento y la consulta de datos en una base de datos mediante el uso del mismo formato de modelo de documento que emplean en el código de aplicación. La naturaleza flexible, semi estructurada y jerárquica de los documentos y las bases de datos de documentos permite que evolucionen según las necesidades de las aplicaciones. El modelo de documentos funciona bien con catálogos, perfiles de usuario y sistemas de administración de contenido en los que cada documento es único y evoluciona con el tiempo.

- **Gráficos:** el propósito de una base de datos de gráficos es facilitar la creación y la ejecución de aplicaciones que funcionan con conjuntos de datos altamente conectados. Los casos de uso típicos para una base de datos de gráficos incluyen redes sociales, motores de recomendaciones, detección de fraude y gráficos de conocimiento.

- **En memoria:** las aplicaciones de juegos y tecnología publicitaria tienen casos de uso como tablas de clasificación, tiendas de sesión y análisis en tiempo real que requieren tiempos de respuesta de microsegundos y pueden tener grandes picos de tráfico en cualquier momento.

**Escalabilidad:**

La escalabilidad en el contexto de Redis se refiere a la capacidad de esta base de datos para manejar un aumento en la carga de trabajo o en la cantidad de datos que necesita gestionar, sin que eso afecte negativamente su rendimiento o su disponibilidad. Esto se logra mediante la posibilidad de agregar más recursos (como servidores) para distribuir la carga, lo que se conoce como escalabilidad horizontal.

En casos de aumento considerable de trafico, en lugar de intentar hacer que un solo servidor Redis haga todo el trabajo, puedes optar por escalar Redis horizontalmente.

Para hacerlo, se puede agregar más servidores Redis a tu entorno. Estos nuevos servidores trabajan en conjunto y distribuyen la carga de manera equitativa. Cada servidor maneja una parte de los productos o datos, y cuando un usuario realiza una solicitud, puede dirigirse a cualquiera de los servidores. Esto distribuye la carga de manera uniforme y garantiza que cada servidor Redis pueda responder rápidamente a las solicitudes.

**Instalacion de Redis:**

Linux: Se puede instalar versiones estables recientes de Redis desde el repositorio APT oficial packages.redis.io.

Si estás ejecutando una distribución mínima (como un Docker), es posible que primero necesite instalar lsb-release, curl y gpg:

sudo apt install lsb-release curl gpg

Agregue el repositorio al apt index, actualícelo y luego instale:

curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb\_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update

sudo apt-get install redis

En linux tambien podes instalar redis vía Snapcraft:

sudo snap install redis

Si no tenesSnapcraft lo podes instalar desde el siguiente link:

[https://snapcraft.io/snapcraft](https://snapcraft.io/snapcraft)

Windows: En windows es más complicado ya que no es compatible, para poder tenerlo en windows tenes que descargar WSL2 (Windows Subsystem for Linux). WSL2 como dice el nombre básicamente te permite abrir la consola de linux.

Una vez que tenemos WSL2 funcionando lo instalamos de la misma manera que en linux.

**Conexion a redis:**

La conexión a Redis se refiere a establecer una comunicación efectiva entre una aplicación o cliente y un servidor Redis. Para conectarse a un servidor Redis, se utilizan bibliotecas o clientes Redis específicos en diferentes lenguajes de programación, como Python, Java, Ruby, entre otros. Estos clientes permiten interactuar con el servidor Redis enviando comandos y recibiendo respuestas.

1. **Selección del Cliente:** En primer lugar, debes seleccionar un cliente Redis adecuado para tu lenguaje de programación. Redis tiene una amplia variedad de clientes disponibles, lo que facilita la integración con tu aplicación.

2. **Configuración de la Conexión:** Debes configurar los parámetros de conexión, como la dirección IP o el nombre de host del servidor Redis y el número de puerto en el que se está ejecutando Redis. Además, si tu servidor Redis requiere autenticación, debes proporcionar las credenciales necesarias.

3. **Inicialización del Cliente:** Crear una instancia del cliente Redis en tu aplicación es el siguiente paso. Esto se hace utilizando las funciones o clases proporcionadas por la biblioteca del cliente Redis en tu lenguaje.

4. **Establecer la Conexión:** Una vez que se ha creado la instancia del cliente, debes establecer la conexión con el servidor Redis. Esto implica que el cliente abrirá una conexión de red con el servidor y estará listo para enviar comandos.

5. **Enviar Comandos y Recibir Respuestas:** Con la conexión establecida, puedes enviar comandos Redis al servidor utilizando el cliente. Los comandos incluyen operaciones como SET, GET, HSET, LPUSH, etc. Cada comando tiene una función específica en Redis. Cuando envías un comando, el cliente lo traduce a la forma adecuada para comunicarse con Redis a través del protocolo de Redis. El servidor Redis procesa el comando y envía una respuesta al cliente.

6. **Recibir y Procesar Respuestas:** Las respuestas del servidor Redis son procesadas por el cliente y se devuelven a tu aplicación. Las respuestas pueden ser valores simples, estructuras de datos o información de estado. Tu aplicación procesa estas respuestas según sea necesario.

7. **Cerrar la Conexión:** Una vez que hayas terminado de interactuar con Redis, es una buena práctica cerrar la conexión al servidor para liberar recursos y mantener la integridad de la conexión.

En resumen, la conexión a Redis implica seleccionar un cliente Redis, configurar la conexión, inicializar el cliente, establecer la conexión, enviar comandos Redis al servidor, recibir y procesar las respuestas y, finalmente, cerrar la conexión cuando ya no sea necesaria. La conexión a Redis es esencial para aprovechar las capacidades de esta base de datos en memoria y aprovechar sus ventajas en aplicaciones web, sistemas en tiempo real y muchas otras aplicaciones.

La inicialización de una conexión a Redis puede variar según el lenguaje de programación y el cliente Redis que estés utilizando. Aquí te proporcionaré ejemplos de cómo inicializar una conexión en tres lenguajes populares: Python, Java y JavaScript (usando el cliente Node.js `ioredis`).

Python:

Para inicializar una conexión en Python, debes usar el cliente Redis `redis-py`. Asegúrate de que primero hayas instalado el cliente usando pip (`pip install redis`).

import redis

# Configura la conexión a Redis

redis\_host = 'localhost' # Host o dirección IP del servidor Redis

redis\_port = 6379 # Puerto en el que Redis está escuchando

redis\_password = None # Contraseña (si es necesario)

# Inicializa el cliente Redis

redis\_client = redis.StrictRedis(host=redis\_host, port=redis\_port, password=redis\_password)

# Ahora puedes usar redis\_client para enviar comandos a Redis

Java:

Para inicializar una conexión en Java, puedes usar el cliente Jedis. Asegúrate de que primero hayas agregado la dependencia de Jedis en tu proyecto.

import redis.clients.jedis.Jedis;

// Configura la conexión a Redis

String redisHost = "localhost";

int redisPort = 6379;

String redisPassword = null; // Contraseña (si es necesario)

// Inicializa el cliente Redis

Jedis jedis = new Jedis(redisHost, redisPort);

if (redisPassword != null) {

jedis.auth(redisPassword);

}

// Ahora puedes usar jedis para enviar comandos a Redis

JavaScript (Node.js) - Usando `ioredis`:

Para inicializar una conexión en Node.js, puedes utilizar el cliente Redis `ioredis`. Asegúrate de que primero hayas instalado el cliente usando npm (`npm install ioredis`).

const Redis = require('ioredis');

// Configura la conexión a Redis

const redisHost = 'localhost';

const redisPort = 6379;

const redisPassword = null; // Contraseña (si es necesario)

// Inicializa el cliente Redis

const redisClient = new Redis({

host: redisHost,

port: redisPort,

password: redisPassword,

});

// Ahora puedes usar redisClient para enviar comandos a Redis

Estos ejemplos muestran cómo inicializar una conexión a Redis en Python, Java y JavaScript (Node.js) utilizando algunos de los clientes Redis populares en esos lenguajes. Debes asegurarte de de personalizar los valores de host, puerto y contraseña según tu configuración específica de Redis. Una vez que se haya inicializado la conexión, puedes utilizar el cliente para enviar comandos Redis al servidor.

**Tipos de datos en Redis**

Redis es conocido por su flexibilidad en cuanto a las estructuras de datos que ofrece. A diferencia de otros sistemas de almacenamiento de clave-valor más simples, Redis proporciona una variedad de tipos de datos que permiten a los desarrolladores abordar una amplia gama de problemas y aplicaciones. Aquí hay una breve explicación de algunos de los tipos de datos que Redis ofrece:

**Cadenas:** Puedes almacenar datos de texto o binarios de hasta 512 MB de tamaño en cadenas. Esto es útil para una amplia variedad de casos de uso, desde simples valores clave hasta datos más complejos.

Ejemplo:

# Almacenar una cadena en Redis

SET miClave "Hola, Redis"

# Recuperar el valor de una cadena

GET miClave

**Listas:** Las listas son colecciones de cadenas que se mantienen en el orden en que se agregaron. Esto es útil para implementar estructuras de datos como colas y pilas.

Ejemplo:

# Agregar elementos a una lista

LPUSH miLista "Manzana" "Banana" "Cereza"

# Obtener elementos de la lista

LRANGE miLista 0 -1

**Conjuntos** : Los conjuntos son colecciones desordenadas de cadenas, y permiten operaciones como intersección, unión y diferencia con otros conjuntos.

Ejemplo:

# Agregar elementos a un conjunto

SADD miConjunto "Rojo" "Verde" "Azul"

# Verificar la pertenencia de un elemento al conjunto

SISMEMBER miConjunto "Rojo"

**Conjuntos ordenados:** Estos son conjuntos en los que cada elemento está asociado con un valor (puntuación) y se mantienen ordenados por ese valor. Esto es útil para implementar clasificaciones y rangos.

Ejemplo:

# Agregar elementos con valores a un conjunto ordenado

ZADD miConjuntoOrdenado 10 "Manzana" 5 "Banana" 8 "Cereza"

# Obtener elementos por rango de puntuación

ZRANGE miConjuntoOrdenado 0 -1

**Hashes:** Los hashes son estructuras de datos que almacenan una lista de campos y valores asociados. Son útiles para representar objetos o registros con múltiples atributos.

Ejemplo:

# Almacenar atributos en un hash

HSET miHash Nombre "Juan" Edad 30 Ciudad "Nueva York"

# Obtener valores de campos en el hash

HGET miHash Nombre

**Mapas de bits:** Este tipo de datos permite realizar operaciones a nivel de bits, lo como establecer, borrar o contar bits individuales en una cadena de bits. Esto es útil para ciertos casos de uso que requieren manipulación a nivel de bits.

Ejemplo:

# Establecer bits en una cadena de bits

SETBIT miMapaDeBits 5 1

# Contar bits establecidos en una cadena de bits

BITCOUNT miMapaDeBits

**HyperLogLogs:** Son estructuras de datos probabilísticas que se utilizan para estimar la cardinalidad de un conjunto, es decir, cuántos elementos únicos hay en un conjunto de datos. Son útiles para contar elementos únicos en grandes conjuntos de datos.

Ejemplo:

# Agregar elementos a una estructura de datos HyperLogLog

PFADD miHyperLogLog "Elemento1" "Elemento2" "Elemento3"

# Estimar la cardinalidad de elementos únicos

PFCOUNT miHyperLogLog

**Secuencias(Streams):** Las secuencias son estructuras de datos de registro que se utilizan para implementar colas de mensajes. Son útiles en escenarios donde se necesita un procesamiento en tiempo real de eventos secuenciales.

Ejemplo:

# Agregar un evento a una secuencia

XADD miSecuencia \* Nombre "Juan" Edad 30

# Leer eventos de la secuencia

XREAD COUNT 1 BLOCK 0 STREAMS miSecuencia 0

**Geoespacial:** Redis admite mapas de entradas basados en longitud y latitud, lo que es útil en aplicaciones de geolocalización, seguimiento de ubicación y mapeo.

Ejemplo:
 # Agregar ubicaciones geoespaciales

GEOADD miMapaGeoespacial 13.361389 38.115556 "CiudadA" 15.087269 37.502669 "CiudadB"

# Buscar ubicaciones cercanas

GEORADIUS miMapaGeoespacial 15 37 100 km

**JSON:** Redis también admite la representación y manipulación de datos estructurados en formato JSON, lo que permite trabajar con objetos anidados y semiestructurados con nombre.

Ejemplo:

# Almacenar un objeto JSON

SET miObjetoJSON '{"Nombre": "Ana", "Edad": 25, "Ciudad": "Chicago"}'

# Obtener un valor específico del objeto JSON

JSON.GET miObjetoJSON .Nombre

Estos tipos de datos ofrecen a los desarrolladores una amplia variedad de herramientas para abordar una amplia gama de necesidades de almacenamiento y procesamiento de datos en aplicaciones.

—----------------------------------------------------------------

LPUSH y RPUSH: Las operaciones LPUSH y RPUSH se utilizan para agregar un elemento al principio (izquierda) o al final (derecha) de una lista, respectivamente. Son operaciones atómicas que garantizan la integridad de la lista.

Ejemplo:

LPUSH mylist "item1"

COMO CREAR UN SISTEMA DE CATCHING PARA ACELERAR UN SISTEMA DE MENSAJER DE ALGUNA APP

Nostros vamos a realizar una actividad en la cual le consultamos a la app random\_dates que nos pase cosas randoms las cuales almacenamos adentro de redis para asi no tener que volver a generar una coneccion con la app y que nos devuelva el resultado nuevamente en corto tiempo

Inicio: crear nuestro archivo Package-json con el comando **NPM INIT -y**

trabajaremos con visual estudio code para una mejor experiencia **CODE .**

Crear la carpeta **rcs**

crear el archivo **index.js**

Para manejarnos comodamente crearemos un script **"start": "node src/index.js"**

Para poder realizar peticiones a otros servicios instalaremos Axios con **"npm install axios"**

Le asignamos al package.json que el proyecto es de tipo module con **"type": "module"**

—---------------------------------------------------------------------