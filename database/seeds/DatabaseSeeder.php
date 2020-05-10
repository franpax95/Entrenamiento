<?php

use Illuminate\Database\Seeder;

use App\Category;
use App\Exercise;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'Francisco Javier Navarro',
            'email'     => 'franpax95@gmail.com',
            'password'  => bcrypt('qwerty')
        ]);

        Category::create([ 'name' => 'Espalda' ]);
        Category::create([ 'name' => 'Piernas' ]);
        Category::create([ 'name' => 'Abdominales' ]);
        Category::create([ 'name' => 'Pesas' ]);

        Exercise::create([
            'name' => 'Flexión craneocervical',
            'description' => 'Colocar una toalla bajo la cabeza (o cojín chico).
            Realizar un movimiento de meter la barbilla como si quisiéramos sacar papada (o aproximarla al esternón).
            Mantener X segundos y repetir.',
            'category_id' => 1,
            'image' => '/images/flexion_craneocervical.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento en inclinación lateral',
            'description' => 'Con una mano agarrada al asiento, inclinar lateralmente el cuello hacia el otro lado.
            Mantener X segundos y volver a la posición inicial.
            Repetir hacia el otro lado.',
            'category_id' => 1,
            'image' => '/images/estiramiento_inclinacion_lateral.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento en flexión con rotación',
            'description' => 'Con una mano agarrada al asiento, realizar flexión máxima y rotación del cuello hacia el otro lado.
            Mantener X segundos y volver a la posición inicial.',
            'category_id' => 1,
            'image' => '/images/estiramiento_flexion_con_rotacion.JPG'
        ]);

        Exercise::create([
            'name' => 'Alargamiento intervertebral',
            'description' => 'Objetivo:
            elongar la columna, aliviando la compresión discal y estimulando la elasticidad del disco intervertebral.
            
            Posición inicial:
            Sedestación(sentado), pies separados ancho de cadera, pelvis neutra, brazos a lo largo del cuerpo.
            
            Imaginamos que tenemos una cuerda en la nuca que nos tira de toda la columna hacia el techo (llevamos el ombligo hacia la columna, esto nos va a ayudar a elongar la columna), la pelvis va a hacer fuerza en sentido contrario (hacia el suelo).',
            'category_id' => 1,
            'image' => null
        ]);

        Exercise::create([
            'name' => 'Estiramiento lumbosacro en silla',
            'description' => 'Objetivo:
            flexibilizar musculatura posterior de las piernas sin bloquear las rodillas, ayuda a mejorar la articulación de la columna.
            
            Posición inicial:
            de pie o sentado, con los pies separados la distancia de las caderas, brazos hacia el techo, hombros descendidos, ombligo dentro.
            Flexionar vértebra a vértebra el tronco, desde las cervicales hasta las lumbares, llevando las manos a los pies.
            Mantener X segundos y volver a la posición inicial.
            Subir vértebra a vértebra desde las lumbares hasta las cervicales, los brazos suben relajados a lo largo de las piernas.',
            'category_id' => 1,
            'image' => '/images/roll_down.JPG'
        ]);

        Exercise::create([
            'name' => 'Mermaid/Estiramiento de la sirena',
            'description' => 'Objetivo:
            Estirar y flexibilizar los espacios intercostales, además de estirar cuadrado lumbar y el dorsal ancho.
            
            La pelvis se mantiene fija y realizamos una inclinación de la columna un brazo por arriba formando una "C". Al realizar la lateroflexión hay que procurar elongar la columna. Podemos realizarlo sentados en una silla.',
            'category_id' => 1,
            'image' => '/images/estiramiento_sirena.JPG'
        ]);

        Exercise::create([
            'name' => 'Elevación alterna de manos',
            'description' => 'Frente a la pared, elevar un brazo deslizándolo lo más alto posible, mantener X segundos y descenderlo lentamente.
            Repetir el ejercicio con el brazo contrario.',
            'category_id' => 1,
            'image' => '/images/elevacion_alterna_manos.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento de psoas',
            'description' => 'Empujar la pierna que está doblada manteniendo la otra estirada.
            Mantener X segundos y volver a la posición inicial.
            Repetir con la otra pierna.',
            'category_id' => 2,
            'image' => '/images/estiramiento_psoas.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento de psoas ilíaco',
            'description' => 'Colócate con una pierna estirada (atrás) y la otra flexionada (delante). En esta postura trate de aproximar la pelvis al suelo lo máximo posible. Mantenga la posición y repita el movimiento con la otra pierna. En esta maniobra el músculo psoas que estiramos es el de la pierna extendida.',
            'category_id' => 2,
            'image' => '/images/psoas_iliaco.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento lumbosacro en suelo',
            'description' => 'Flexionar las rodillas y las caderas hasta sentarse sobre los talones, flexionando a la vez el cuello.
            Deslizar las manos hacia delante al finalizar el movimiento.
            Mantener X segundos y volver a la posición inicial.',
            'category_id' => 1,
            'image' => '/images/estiramiento_lumbosacro_suelo.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento lumbosacro tumbado',
            'description' => 'Flexionar de forma simultánea la cadera y las rodillas de ambas piernas.
            Empujar la parte superior de las piernas hacia el pecho (no hace falta levanta la cabeza, ni forzar el cuello).
            Mantener X segundos y volver a la posición inicial.',
            'category_id' => 1,
            'image' => '/images/estiramiento_lumbosacro_tumbado.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento de isquiotibiales tumbado',
            'description' => 'Ejercicio de estiramientos de nervios lumbopélvicos.

            Flexionar una cadera y mantener el muslo elevado en esta posición. Extender la rodilla lo máximo posible. Mantener la posición X segundos y volver a la posición inicial.
            Cuando la pierna esté arriba, lleva los dedos de los pies hacia ti.',
            'category_id' => 2,
            'image' => '/images/estiramiento_isquiotibiales_tumbado.JPG'
        ]);

        Exercise::create([
            'name' => 'Estiramiento piramidal',
            'description' => 'Empujar la rodilla hacia el hombro contrario y el pie hacia atrás.
            Mantener X segundos y volver a la posición inicial.
            Repetir con la otra pierna.',
            'category_id' => 1,
            'image' => '/images/estiramiento_piramidal.JPG'
        ]);

        Exercise::create([
            'name' => 'Báscula pélvica sentado',
            'description' => 'Ejercicio de movilidad lumbar:
            Apretar el abdomen y aplanar la columna lumbar. Mantener X segundos y volver a la posición inicial.',
            'category_id' => 1,
            'image' => '/images/bascula_pelvica_sentado.JPG'
        ]);

        Exercise::create([
            'name' => 'Báscula pélvica en supino',
            'description' => 'Ejercicio de movilidad lumbar:
            Apretar el abdomen, contraer los glúteos y hacer que éstos se despeguen del suelo 1 ó 2 centímetros, y aplanar la columna lumbar.
            
            Mantener 5 segundos y volver a la posición inicial.',
            'category_id' => 1,
            'image' => '/images/bascula_pelvica_supino.JPG'
        ]);

        Exercise::create([
            'name' => 'Gato-camello',
            'description' => 'Arquear la columna hacia arriba, flexionando el cuello. Mantener X segundos.

            Arquear la columna hacia abajo, extendiendo el cuello.
            Mantener X segundos.',
            'category_id' => 1,
            'image' => '/images/gato-camello.JPG'
        ]);

        Exercise::create([
            'name' => 'Columna dorsal con peso',
            'description' => 'Posición de partida:
            De espaldas, las rodillas dobladas, los brazos a lo largo del cuerpo.
            Ejecución:
            Inspirando, se levantan los brazos extendidos hasta detrás de la cabeza, después se vuelven a la posición de partida, pasándolos por los lados, y espirando. Realizar el ejercicio con 1kg en cada mano.',
            'category_id' => 1,
            'image' => '/images/CD1.JPG'
        ]);

        Exercise::create([
            'name' => 'Columna dorsal sin peso',
            'description' => 'Posición de partida:
            De espaldas, las rodillas dobladas, las manos bajo la nuca.
            
            Ejecución:
            Inspirando se aprietan los codos contra el suelo, después se relaja la presión, espirando.',
            'category_id' => 1,
            'image' => '/images/CD2.JPG'
        ]);

        Exercise::create([
            'name' => 'Elevar la cadera',
            'description' => 'Fortalece isquios, glúteos y lumbares.
            Consiste en elevar la cadera en isométrico manteniendo la posición un tiempo determinado. También se puede hacer mediante repeticiones, subiendo y bajando la cadera.
            
            Una vez arriba, apretar los glúteos y mantener la posición en la que el cuerpo se mantiene en línea recta, desde el cuello hasta las rodillas.',
            'category_id' => 1,
            'image' => '/images/eleva-cadera.jpg'
        ]);

        Exercise::create([
            'name' => 'Abdominales inferiores',
            'description' => 'Boca arriba, elevar las piernas un poco y mantener X segundos, apretando los abdominales.',
            'category_id' => 3,
            'image' => null
        ]);

        Exercise::create([
            'name' => 'Tijeras Bajas',
            'description' => 'Ejercicio de abdominales inferiores.
            Consiste en entrecruzar las piernas manteniéndolas ligeramente elevadas del suelo.
            
            Tumbarse bocarriba, con los brazos extendidos junto al cuerpo.
            Elevar ligeramente las dos piernas de suelo manteniéndolas rectas, sin flexionar las rodillas.
            Cruzar las piernas derecha a izquierda e izquierda a derecha.
            Se COMPLETA el ejercicio cuando has pasado ambas piernas por encima de la otra.',
            'category_id' => 3,
            'image' => '/images/tijeras_bajas.JPG'
        ]);

        Exercise::create([
            'name' => 'El Escalador',
            'description' => '( ! ) Consta de 2 versiones: en la primera, sin cruzar, la rodilla dcha toca el codo dcho y la rodilla izq toca el codo izq; en la segundo, cruzando, la rodilla dcha toca el codo izq y la rodilla izq toca el codo dcho.
            Espalda recta, contraer una pierna, de manera que la rodilla intente tocar el codo.
            Volver a la posición inicial.
            Repetir con la otra pierna.
            Es importante apretar los abdominales cada vez que la rodilla intente tocar el codo. Cuanto más ritmo haciendo el ejercicio, mejor.',
            'category_id' => 3,
            'image' => '/images/el_escalador.JPG'
        ]);

        Exercise::create([
            'name' => 'Plancha frontal',
            'description' => 'Espalda recta, respetando sus curvaturas. Apretar los glúteos para evitar la hiperlordosis en la parte de la espalda baja.

            Debemos mantener esta posición sin movernos durante el tiempo que podamos sin llegar a forzar mucho la posición.',
            'category_id' => 3,
            'image' => '/images/plancha-frontal.jpg'
        ]);

        Exercise::create([
            'name' => 'Plancha lateral',
            'description' => 'IMPORTANTE: REALIZAR EL EJERCICIO DOS VECES, UNO PARA CADA OBLICUO. ES DECIR, DALE DOS VECES AL TIMER.

            En este ejercicio fortalecemos sobretodo abdominales oblicuos y el transverso del abdomen.
            
            Para realizar este ejercicio correctamente, tenemos que tener en cuenta que el cuerpo esté alineado desde el pie hasta el hombro. Además, los dos hombros se deben tener uno encima del otro, como si trazáramos una línea recta vertical que pasara por los dos hombros, para tener la espalda recta.',
            'category_id' => 3,
            'image' => '/images/plancha-lateral.jpg'
        ]);

        Exercise::create([
            'name' => 'Remo con mancuernas',
            'description' => 'Coge una mancuerna con cada mano y flexiona tus rodillas y caderas como para colocarte en una posición de sentadillas.

            Eleva ambas mancuernas en forma recta hacia arriba, sin alterarlos ángulos de tus rodillas y caderas, y bájalas nuevamente luego de una breve pausa.
            
            Exhala al levantar las mancuernas e inhala al retornar a la posición de inicio.',
            'category_id' => 1,
            'image' => '/images/remo_mancuernas.gif'
        ]);

        Exercise::create([
            'name' => 'Peso muerto con mancuernas',
            'description' => 'Ponte de pie y sujeta una mancuerna con cada una de tus manos.
            Flexiona tus rodillas y caderas al bajar las mancuernas hacia abajo en forma recta y elévate a ti mismo luego de una breve pausa.
            
            Inhala al bajar y exhala al retornar a la posición inicial.',
            'category_id' => 1,
            'image' => '/images/peso_muerto_mancuernas.gif'
        ]);

        Exercise::create([
            'name' => 'Peso muerto con piernas rectas',
            'description' => 'Ponte de pie y estírate hacia abajo de modo de tomar dos mancuernas con ambas manos (las rodillas ligeramente flexionadas).

            Eleva tu tronco hasta que estés parado y bájalo luego de una breve pausa.
            
            Intenta mantener tus brazos rectos durante todo el movimiento, conservando el mismo arco pequeño en tus codos.',
            'category_id' => 1,
            'image' => '/images/peso_muerto_piernas_rectas.gif'
        ]);

        Exercise::create([
            'name' => 'Vuelos frontales',
            'description' => 'Ponte de pie y sujeta una mancuerna con cada mano frente a tus muslos, con las palmas apuntando hacia tu cuerpo.

            Eleva las mancuernas hacia adelante hasta que tus brazos estén casi paralelos al suelo, y bájalas luego de una breve pausa.
            
            Mantén tus brazos extendidos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/hombros1.gif'
        ]);

        Exercise::create([
            'name' => 'Vuelos laterales',
            'description' => 'Ponte de pie y sujeta una mancuerna con cada mano frente a tus caderas, con las palmas apuntando una hacia otra.

            Eleva las mancuernas hacia los costados, hasta que tus brazos estén cerca de quedar paralelos al suelo y bájalas luego de una breve pausa.
            
            Intenta mantener los ángulos en tus codos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/hombros2.gif'
        ]);

        Exercise::create([
            'name' => 'Prensa de hombros',
            'description' => 'Ponte de pie y sujeta dos mancuernas cerca de tus hombros, con las palmas apuntando hacia adelante.

            Empuja las mancuernas en forma recta hacia arriba, hasta que tus codos estén cerca de trabarse y bájalas luego de una breve pausa.
            
            Ten cuidado de NO mover tu espalda en el intento de ayudar a levantar las mancuernas.',
            'category_id' => 4,
            'image' => '/images/hombros3.gif'
        ]);

        Exercise::create([
            'name' => 'Remo vertical',
            'description' => 'Ponte de pie y sujeta una mancuerna en cada mano enfrente de tus muslos.

            Levanta ambas mancuernas hasta que tus brazos estén casi paralelos al suelo y bájalas lentamente luego de una breve pausa.
            
            Ten cuidado de NO mover tu espalda en el intento de ayudar a levantar las mancuernas.',
            'category_id' => 4,
            'image' => '/images/hombros4.gif'
        ]);

        Exercise::create([
            'name' => 'Patada de burro de tríceps',
            'description' => 'Coloca tu rodilla y tu mano sobre un banco y coge una mancuerna con tu otra mano, con la palma apuntando hacia tu cuerpo, y la parte superior de tu brazo paralela a tu cuerpo.

            Empuja la mancuerna hacia atrás mediante la extensión de tu codo y permítele retornar lentamente luego de una breve pausa.
            
            Mantén firmes las partes superiores de tus brazos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/triceps2.gif'
        ]);

        Exercise::create([
            'name' => 'Extensiones de tríceps sentado',
            'description' => 'Siéntate y sujeta una mancuerna con ambas manos, detrás de tu cabeza, con los codos formando ángulos de 90 grados y las partes superiores de los brazos hacia arriba en forma recta.

            Eleva la mancuerna con ambas manos hasta que tus brazos estén casi totalmente extendidos y luego de una breve pausa bájala lentamente.
            
            Mantén firmes las partes superiores de tus brazos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/triceps1.gif'
        ]);

        Exercise::create([
            'name' => 'Fondos sobre banco',
            'description' => 'Colocar las manos sobre un banco o silla, separadas del ancho de los hombros.

            Siempre debes mantener levemente flexionados los codos de manera de mantener constante la presión sobre los triceps.
            
            Los codos deben mantenerse lo más cerca del torso posible y deben flexionarse hacia atrás, evitando que se desplacen hacia afuera durante el descenso, ya que el esfuerzo no se concentrará del todo en el triceps y puede sobrecargar la articulación del hombro.
            
            Se debe inspirar al descender el cuerpo mediante la flexión de codos y espirar al regresar a la posición inicial lentamente, empujando con fuerza el cuerpo hacia arriba.
            
            No permita que el cuello se hunda en su torso y los hombros asciendan hasta el nivel de sus oídos, sino que intente solo formar un ángulo de 90 grados con los brazos.',
            'category_id' => 4,
            'image' => '/images/fondo_sobre_banco.JPG'
        ]);

        Exercise::create([
            'name' => 'Flexiones de bíceps concentradas',
            'description' => 'Párate detrás de un banco inclinado y apoya un brazo sobre el respaldo, mientras sujetas una mancuerna, con la palma apuntando hacia adelante.

            Eleva la mancuerna hacia tu hombro y bájala luego de una breve pausa.
            
            Durante el ejercicio, sólo debes mover la parte inferior de tu brazo.',
            'category_id' => 4,
            'image' => '/images/biceps5.gif'
        ]);

        Exercise::create([
            'name' => 'Flexiones martillo',
            'description' => 'Coge una mancuerna con cada mano, hacia los costados de tu cuerpo, con las palmas apuntando hacia tu cuerpo.

            Eleva ambas mancuernas mediante la flexión de tus codos y bájalas luego de una breve pausa.
            
            Mantén quieta la parte superior de tus brazos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/biceps3.gif'
        ]);

        Exercise::create([
            'name' => 'Apertura recostado',
            'description' => 'Recuéstate de espalda sobre el banco y coge una mancuerna con cada mano a la altura del cuerpo, con tus codos ligeramente arqueados.

            Eleva las mancuernas hasta que estén lado a lado por encima de tu cuerpo y luego de una breve pausa bájalas lentamente.
            
            Intenta mantener el mismo ángulo en tus codos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/pecho3.gif'
        ]);

        Exercise::create([
            'name' => 'Prensa de pecho en banco',
            'description' => 'Recuéstate de espalda sobre un banco y sujeta 2 mancuernas al nivel del pecho, a los lados del cuerpo, con las palmas apuntando hacia tus pies.

            Eleva las mancuernas en forma recta hacia arriba hasta que tus codos se encuentren cerca de trabarse y bájalas lentamente luego de una breve pausa.
            
            Exhala al levantar las mancuernas e inhala al bajarlas.',
            'category_id' => 4,
            'image' => '/images/pecho1.gif'
        ]);

        Exercise::create([
            'name' => 'Apertura inclinado',
            'description' => 'Recuéstate de espalda sobre un banco inclinado y coge una mancuerna con cada mano a la altura del cuerpo, con tus codos ligeramente arqueados.

            Eleva las mancuernas hasta que estén lado a lado por encima de tu cuerpo y luego de una breve pausa bájalas lentamente.
            
            Intenta mantener el mismo ángulo en tus codos durante todo el movimiento.',
            'category_id' => 4,
            'image' => '/images/pecho4.gif'
        ]);

        Exercise::create([
            'name' => 'Prensa de pecho en banco inclinado',
            'description' => 'Recuéstate de espalda sobre un banco inclinado y sujeta 2 mancuernas al nivel del pecho, a los lados del cuerpo, con las palmas apuntando hacia adelante.

            Eleva las mancuernas en forma recta hacia arriba hasta que tus codos se encuentren cerca de trabarse y bájalas lentamente luego de una breve pausa.
            
            Exhala al levantar las mancuernas e inhala al bajarlas.',
            'category_id' => 4,
            'image' => '/images/pecho2.gif'
        ]);

        Exercise::create([
            'name' => 'Flexiones en el suelo',
            'description' => 'Al realizar flexiones de brazos en suelo solicitamos principalmente el pectoral, pudiendo incidir más en el haz clavicular del pectoral mayor si elevamos los pies o trabajar en mayor medida la parte inferior del pectoral mayor si elevamos el torso.

            Asimismo, con este movimiento requerimos del trabajo del tríceps que colabora en la extensión de los brazos para elevar el torso. Podemos incidir más en este músculo si colocamos las manos más cerca del cuerpo, es decir, con una apertura más estrecha.
            
            De manera secundaria son trabajados el deltoides anterior que fija el hombro, los bíceps que colaboran con la flexión de brazos y el abdomen que colabora manteniendo la postura adecuada durante el ejercicio.',
            'category_id' => 2,
            'image' => null
        ]);
    }
}
