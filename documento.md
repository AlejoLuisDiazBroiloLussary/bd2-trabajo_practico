<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/2560px-Logo-redis.svg.png" alt="Redis Logo" width="200">

<hr>

## Grupo 4 

### Integrantes
- Maximo Blazquez
- Julian Rosas
- Bautista Cimatti
- Franco Ebner
- Agustin Odetti
- Alejo Diaz Broilo
<br>
<hr>

## Indice

- [Introduccion](#Intro)
  -  [¿Qué es redis?](#que)
  -  [¿Para qué se usa?](#para_que)
  -  [Ventajas de usar Redis](#ventajas)
  -  [Desventajas de usar Redis:](#desventajas)
- [Page 2](#page2)
- [Page 3](#page3)

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
    <li>
    El bucle de eventos se bloquea y espera a que ocurran eventos en las conexiones de clientes, como datos disponibles para lectura o capacidad de escritura en los sockets.
    </li>
    <li>
    Una vez que ocurre un evento, el bucle de eventos desbloquea y procesa el evento. Puede ser una solicitud de cliente para escribir datos, una solicitud para leer datos o incluso un nuevo cliente que intenta conectarse.  La clave del multiplexing en Redis es que las operaciones de lectura y escritura en las conexiones se realizan de manera no bloqueante. Esto significa que el hilo no se bloquea esperando una operación de E/S para completarse, el hilo pasa a la siguiente conexión para atender otros eventos.
    </li>
    <li>
    Cuando se realiza una solicitud, Redis procesa la solicitud y envía la respuesta al cliente. Esto puede incluir la recuperación de datos, actualizaciones en la base de datos en memoria de Redis, o cualquier otra operación específica del cliente.
    </li>
    <li>
    Una vez que se ha atendido un evento, el bucle de eventos repite el proceso de espera y procesamiento, manejando múltiples conexiones de forma concurrente.
    </li>
  </ol>
  </li>
  
  </ul>
  </li>
</ul>
<div style="background-color: lightgray; padding: 20px;">
  Una cosa a tener en cuenta del “single threading” es que no se explota toda la potencia del procesador, por lo que es práctica común el tener varias instancias de redis siendo procesadas en distintos núcleos.

</div>

## algo mas

<div style="background-color: lightblue; padding: 20px;">
  <p>Section with a light blue background.</p>
</div>
