function leer(){
    db.collection("Usuario").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var th= 
            `
               <th>`+`${doc.data().nombre}`+`</th>
               <th>`+`${doc.data().apellido}`+`</th>
            `;
            $("fila").append(th)
        });
    });
}