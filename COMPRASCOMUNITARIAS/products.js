let products = [ 
    { name: 'Cajón Acelga (10u)', amount: 0, url: 'images/acelga.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Achicoria (10kg)', amount: 0, url: 'images/achicoria.jpg', type: 'veggie' },
    // { name: 'Cajón Aji Vinagre (10kg)', amount: 0, url: 'images/ajivinagre.jpg', type: 'veggie' },
    // { name: 'Ajo (x3)', amount: 0, url: 'images/ajo.jpg', type: 'veggie' },
    { name: 'Cajón Albahaca (10u)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie', price: 235 },
    // { name: 'Bolsa Anco (17kg)', amount: 0, url: 'images/anco.jpg', type: 'veggie', price: 770 },
    // { name: 'Cajón Apio (6 Paq)', amount: 0, url: 'images/apio.jpg', type: 'veggie', price: 300 },
    { name: 'Caja Banana (18kg)', amount: 0, url: 'images/banana.jpeg', type: 'fruit', price: 770 },
    // { name: 'Bolsa Batata (17kg)', amount: 0, url: 'images/batata.jpg', type: 'veggie', price: 460 },
    // { name: 'Bolsa Boniato (10kg)', amount: 0, url: 'images/boniato.jpg', type: 'veggie', price: 350 },
    { name: 'Cajón Brocoli (10 Paq)', amount: 0, url: 'images/brocoli.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Berenjena (10kg)', amount: 0, url: 'images/berenjena.jpg', type: 'veggie', price: 885 },
    // { name: 'Bolsa Caboutie (12kg)', amount: 0, url: 'images/caboutie.jpg', type: 'veggie', price: 472 },
    // { name: 'Bolsa Cebolla (17kg)', amount: 0, url: 'images/cebolla.jpg', type: 'veggie', price: 600 },
    // { name: 'Bolsa Cebolla Morada (17kg)', amount: 0, url: 'images/cebollamorada.jpg', type: 'veggie', price: 700 },
    // { name: 'Cajón Chaucha (10kg)', amount: 0, url: 'images/chaucha.jpg', type: 'veggie', price: 300 },
    // { name: 'Cajón Cilantro (10 Paq)', amount: 0, url: 'images/cilantro.jpg', type: 'veggie', price: 300 },
    // { name: 'Cajón Ciruela (kg)', amount: 0, url: 'images/ciruela.jpg', type: 'fruit', price: 70 },   
    // { name: 'Cajón Choclo (20u)', amount: 0, url: 'images/choclo.jpg', type: 'veggie' },
    { name: 'Cajón Coliflor (10kg)', amount: 0, url: 'images/coliflor.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Durazno (8kg)', amount: 0, url: 'images/durazno.jpg', type: 'fruit', price: 70 },
    { name: 'Cajón Espinaca (10 Paq)', amount: 0, url: 'images/espinaca.jpg', type: 'veggie', price: 355 },
    { name: 'Cajón Hinojo (10u)', amount: 0, url: 'images/hinojo.jpg', type: 'veggie', price: 355 },   
    { name: 'Cajón Kale Morado (10 Paq)', amount: 0, url: 'images/kalemorado.jpg', type: 'veggie', price: 355 },
    { name: 'Cajón Kale (10 Paq)', amount: 0, url: 'images/kale.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Kiwi (8kg)', amount: 0, url: 'images/kiwi.jpg', type: 'fruit', price: 600 },
    { name: 'Cajón Lechuga (10kg)', amount: 0, url: 'images/lechugacrespa.jpg', type: 'veggie', price: 355 },
    { name: 'Bolsa Limon (17kg)', amount: 0, url: 'images/limon.jpg', type: 'fruit', price: 710 },
    // { name: 'Cajón Melon (8kg)', amount: 0, url: 'images/melon.jpg', type: 'fruit', price:  },
    // { name: 'Cajón Mango (8kg)', amount: 0, url: 'images/mango.jpg', type: 'fruit', price:  },
    { name: 'Cajón Manzana Roja (18kg)', amount: 0, url: 'images/manzana.jpg', type: 'fruit', price: 1005 },
    // { name: 'Cajón Manzana Verde (18kg)', amount: 0, url: 'images/manzanaverde.jpg', type: 'fruit', price: 750 },
    { name: 'Cajón Mandarina (17kg)', amount: 0, url: 'images/mandarina.jpg', type: 'fruit', price: 825 },
    // { name: 'Cajón Maracuya (8kg)', amount: 0, url: 'images/maracuya.jpg', type: 'fruit', price: 1000 },
    // { name: 'Menta (Paq)', amount: 0, url: 'images/menta.jpg', type: 'veggie', price: 24 },
    // { name: 'Cajón Morron Verde (7,5kg)', amount: 0, url: 'images/morron.jpg', type: 'veggie', price: 710 },
    // { name: 'Cajón Morron Rojo (10kg)', amount: 0, url: 'images/morronrojo.jpg', type: 'veggie', price: 300 },
    { name: 'Cajón Nabo (6 Paq)', amount: 0, url: 'images/nabo.jpg', type: 'veggie', price: 142 },
    { name: 'Cajón Naranja (17kg)', amount: 0, url: 'images/naranja.jpg', type: 'fruit', price: 825 },
    // { name: 'Cajón Pack Choi (10 Paq)', amount: 0, url: 'images/packchoi.jpg', type: 'veggie', price: 300 },
    { name: 'Cajón Palta (8kg)', amount: 0, url: 'images/palta.jpg', type: 'fruit', price: 1475 },
    // { name: 'Bolsa Papa (17kg)', amount: 0, url: 'images/papa.jpg', type: 'veggie', price: 380 },
    // { name: 'Bolsa Papa Colorada (17kg)', amount: 0, url: 'images/papacolorada.jpg', type: 'veggie', price: 400 },
    { name: 'Cajón Pomelo Rosado (17kg)', amount: 0, url: 'images/pomelo.jpg', type: 'fruit', price: 825 },  
    // { name: 'Cajón Pepino (10kg)', amount: 0, url: 'images/pepino.jpg', type: 'veggie', price: 300 },
    { name: 'Cajón Pera (17kg)', amount: 0, url: 'images/pera.jpeg', type: 'fruit', price: 1005 },
    { name: 'Cajón Perejil (10 Paq)', amount: 0, url: 'images/perejil.jpg', type: 'veggie', price: 235 },
    { name: 'Cajón Puerro (10 Paq)', amount: 0, url: 'images/puerro.jpg', type: 'veggie', price: 355 },
    { name: 'Cajón Rabanito (10 Paq)', amount: 0, url: 'images/rabanito.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Radicheta (10 Paq)', amount: 0, url: 'images/radicheta.jpg', type: 'veggie', price: 300 },
    { name: 'Cajón Repollo (10kg)', amount: 0, url: 'images/repollo.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Repollito de Brusela (10kg)', amount: 0, url: 'images/repollitobrusela.jpg', type: 'veggie', price: 1000 },
    { name: 'Cajón Remolacha (10 Paq)', amount: 0, url: 'images/remolacha.jpg', type: 'veggie', price: 355 },
    { name: 'Cajón Rucula (10 Paq)', amount: 0, url: 'images/rucula.jpg', type: 'veggie', price: 235 },
    // { name: 'Sandia (kg)', amount: 0, url: 'images/watermelon.jpg', type: 'fruit', price:  },
    // { name: 'Cajón Tomate (15,5kg)', amount: 0, url: 'images/tomate.jpg', type: 'veggie', price: 710 },
    // { name: 'Bolsa Toronja (uni)', amount: 0, url: 'images/toronja.jpg', type: 'fruit', price:  },
    // { name: 'Cajón Tomate Cherry (4kg)', amount: 0, url: 'images/tomatecherry.jpg', type: 'veggie', price: 710 },
    // { name: 'Cajón Uva (8kg)', amount: 0, url: 'images/uva.jpg', type: 'fruit', price: },
    { name: 'Cajón Verdeo (10 Paq)', amount: 0, url: 'images/verdeo.jpg', type: 'veggie', price: 355 },
    { name: 'Cajón Zanahoria (10 Paq)', amount: 0, url: 'images/zanahoria.jpg', type: 'veggie', price: 355 },
    // { name: 'Cajón Zapallito (10kg)', amount: 0, url: 'images/zapallitos.jpg', type: 'veggie' },
    // { name: 'Cajón Zuchinni (10kg)', amount: 0, url: 'images/zuchinni.jpg', type: 'veggie' },
    { name: 'Arroz Yamaní Org Integral NOVEDAD SUMATE! (5KG)', amount: 0, url: 'images/arrozyamani.jpg', type: 'meal', price: 650 },
    // { name: 'Arroz Organico x kg (12 u)', amount: 0, url: 'images/arrozorganico.jpg', type: 'meal', price: 100 },
    // { name: 'Jengibre (100g)', amount: 0, url: 'images/jengibre.jpg', type: 'meal', price: 30 },
    // { name: 'Cúrcuma (100g)', amount: 0, url: 'images/curcuma.jpeg', type: 'meal', price: 30 },
    { name: 'Champiñon (kg)', amount: 0, url: 'images/champi.jpg', type: 'meal', price: 410 },
    { name: 'Portobello (kg)', amount: 0, url: 'images/portobello.jpg', type: 'meal', price: 450 },
    // { name: 'Cajón Shitake (kg)', amount: 0, url: 'images/shitake.jpg', type: 'meal', price: 440 },
    { name: 'Gírgolas (kg)', amount: 0, url: 'images/girgolas.jpg', type: 'meal', price: 500 },
    // { name: 'Bolsa Nueces de Catamarca (5kg)', amount: 0, url: 'images/nueces.jpg', type: 'meal', price: 1400 },
    // { name: 'Caja Vino Biodinámico x 750ml (6u)', amount: 0, url: 'images/vino.jpg', type: 'meal', price: 780 },
    { name: 'Sal Fina Bioconexión x 1/2kg (30u)', amount: 0, url: 'images/sal.jpg', type: 'meal', price: 355 },
    { name: 'Sal Gruesa Bioconexión x 1kg (15u)', amount: 0, url: 'images/sal.jpg', type: 'meal', price: 355 },
    { name: 'Tomate Triturado Anahata x 1L (6u)', amount: 0, url: 'images/anahata.jpg', type: 'meal', price: 1005 },
    { name: 'Yerba biodinámica Arapegüa x 1/2Kg (20u)', amount: 0, url: 'images/arapegua.jpg', type: 'meal', price: 3070 },
    { name: 'Yerba orgánica Taihang x 1/2Kg (10u)', amount: 0, url: 'images/taihang.jpg', type: 'meal', price: 1065 },
    { name: 'Bolsa Arvejas (5kg)', amount: 0, url: 'images/arveja.jpg', type: 'meal', price: 330 },
    { name: 'Bolsa Garbanzos (5kg)', amount: 0, url: 'images/garbanzo.jpg', type: 'meal', price: 440 },
    { name: 'Bolsa Maiz Pisingallo (5kg)', amount: 0, url: 'images/maizpisingallo.jpg', type: 'meal', price: 350 },
    { name: 'Bolsa Lino Dorado (5kg)', amount: 0, url: 'images/linodorado.jpg', type: 'meal', price: 440 },
    { name: 'Bolsa Lino Marrón (5kg)', amount: 0, url: 'images/linomarron.jpg', type: 'meal', price: 440 },
    { name: 'Bolsa Sésamo (5kg)', amount: 0, url: 'images/sesamo.jpg', type: 'meal', price: 1235 },
    { name: 'Bolsa Chía (5kg)', amount: 0, url: 'images/chia.jpg', type: 'meal', price: 1235 },
    { name: 'Bolsa Mijo (5kg)', amount: 0, url: 'images/mijo.jpg', type: 'meal', price: 620 },
    { name: 'Bolsa Lentejas (5kg)', amount: 0, url: 'images/lenteja.jpg', type: 'meal', price: 500 },
    { name: 'Bolsa Poroto Adzuki (5kg)', amount: 0, url: 'images/porotoadzuki.jpg', type: 'meal', price: 500 },
    { name: 'Bolsa Poroto Mung (5kg)', amount: 0, url: 'images/porotomung.jpg', type: 'meal', price: 580 },
    { name: 'Bolsa Porotos Soja (5kg)', amount: 0, url: 'images/soja.jpg', type: 'meal', price: 325 },
    { name: 'Bolsa Trigo candeal (5kg)', amount: 0, url: 'images/trigo.jpg', type: 'meal', price: 230 },
    { name: 'Bolsa Poroto Colorado (5kg)', amount: 0, url: 'images/porotocolorado.jpg', type: 'meal', price: 520 },
    { name: 'Bolsa Poroto Alubia (5kg)', amount: 0, url: 'images/porotoalubia.jpg', type: 'meal', price: 520 },
    { name: 'Bolsa Poroto Negro (5kg)', amount: 0, url: 'images/porotonegro.jpg', type: 'meal', price: 520 },
    { name: 'Bolsa Avena arrollada (5kg)', amount: 0, url: 'images/avena.jpg', type: 'meal', price: 590 },
    // { name: 'Paq. Polenta "Del Campo" x 500g (20 u)', amount: 0, url: 'images/polenta.jpg', type: 'meal', price: 780 },
    // { name: 'Azucar rubia org "Schatzi" (3kg)', amount: 0, url: 'images/azucar.jpg', type: 'meal', price: 350 },
    // { name: 'Arroz Yamaní Integral "Schatzi" (3kg)', amount: 0, url: 'images/arrozyamani.jpg', type: 'meal', price: 320 },
    // { name: 'Arroz Blanco "Schatzi" (3kg)', amount: 0, url: 'images/arrozlargointegral.jpg', type: 'meal', price: 340 },
    // { name: 'Granola "Schatzi" (1,5kg)', amount: 0, url: 'images/granolaintegral.jpg', type: 'meal', price: 325 },
    // { name: 'Proteina de Soja "Schatzi" (1,5kg)', amount: 0, url: 'images/proteinadesoja.jpg', type: 'meal', price: 210 },
    // { name: 'Azucar rubia orgánica "Schatzi" (500g)', amount: 0, url: 'images/azucarrubia.jpg', type: 'meal', price: 65 },
    // { name: 'Queso crema "La Choza" (175grs)', amount: 0, url: 'images/quesocrema175.jpg', type: 'meal', price: 85 },
    // { name: 'Yogurt Natural descremado "La Choza" (1Lt)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 160 },
    // { name: 'Yogurt Entero de Mora "La Choza" (1Lt)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 200 },
    // { name: 'Yogurt Descremado de Frutos Rojos "La Choza" (1Lt)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 200 },
    // { name: 'Yogurt Natural Descremado "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 50 },
    // { name: 'Yogurt Entero de Vainilla "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Yogurt Entero de Mora "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Yogurt Entero de Frutilla "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Yogurt Descremado de Frutos del Bosque "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
     { name: 'Maple Huevos (x30)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 250 },
    { name: 'Miel Pura x Kg (10u)', amount: 0, url: 'images/mielkg.jpeg', type: 'meal', price: 2700 },
     { name: 'Miel Pura x 1/2Kg (10u)', amount: 0, url: 'images/mielmedio.jpeg', type: 'meal', price: 1350 },
    // { name: 'Aceit Verdes "Simone" (100g)', amount: 0, url: 'images/aceitunaverdekilo.jpeg', type: 'meal', price: 40 },
     { name: 'Aceit Verdes "Simone" (1Kg)', amount: 0, url: 'images/aceitunaverdekilo.jpeg', type: 'meal', price: 400 },
    // { name: 'Aceit Negras "Simone" (100g)', amount: 0, url: 'images/aceitunanegrakilo.jpeg', type: 'meal', price: 40 },
     { name: 'Aceit Negras "Simone" (1Kg)', amount: 0, url: 'images/aceitunanegrakilo.jpeg', type: 'meal', price: 400 },
    // { name: 'Aceit Griegas "Simone" (100g)', amount: 0, url: 'images/aceitunagriegakilo.jpeg', type: 'meal', price: 40 },
     { name: 'Aceit Griegas "Simone" (1Kg)', amount: 0, url: 'images/aceitunagriegakilo.jpeg', type: 'meal', price: 400 },
    { name: 'Aceite de Oliva "Simone" (1L)', amount: 0, url: 'images/aceiteoliva.jpg', type: 'meal', price: 450 },
    
]
products = products.sort()

let discounts = [
    { amount: "1", price: 55 },
    { amount: "2", price: 52.50 },
    { amount: "3", price: 50 },
    { amount: "4", price: 47.50 },
    { amount: "5+", price: 45 },
    //{ amount: "60 > 200", price: 41 },
    //{ amount: "200 > 250", price: 36 },
    //{ amount: "250 >", price: 32 }
]


//Scroll top on pageload
window.addEventListener('scroll', function (evt) {

    var distance_from_top = document.documentElement.scrollTop

    if (distance_from_top === 0) {
        document.getElementsByClassName("search")[0].classList.remove("fixed");
    }
k
    if (distance_from_top > 0) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
    }

});