<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/2560px-Logo-redis.svg.png" alt="Redis Logo" width="200">

<hr>

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
    <li><u>Caché de datos</u>: Redis es ampliamente utilizado como una capa de caché de datos en aplicaciones web y sistemas en general.</li>
    <br>
    <li><u>Cola de mensajes</u>: Redis se usa para implementar colas de mensajes en sistemas que requieren el procesamiento de tareas en segundo plano o el encolamiento de trabajos.  </li>
    <br>
    <li><u>Sesiones de usuario</u>: Redis es una elección común para almacenar sesiones de usuario en aplicaciones web, ya que es rápido y escalable.</li>
    <br>
    <li><u>Sistemas de geoespacial</u>: Redis admite estructuras de datos geoespaciales que permiten realizar consultas y cálculos basados en la ubicación, lo que es útil en aplicaciones de seguimiento de ubicación y mapeo. </li>
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
<hr>

# ¿Cómo funciona Redis? 

## Fundamentos basicos:

Redis es una base de datos en memoria que funciona almacenando datos en la RAM para un acceso rápido.

## algo mas

<div style="background-color: lightblue; padding: 20px;">
  <p>Section with a light blue background.</p>
</div>
