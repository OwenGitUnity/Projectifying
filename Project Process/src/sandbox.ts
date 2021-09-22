let Entity: (a: string, b: string) => void;

Entity = (id: string, uid: string) => {
    console.log(`the Entity ${uid} is called ${id}`);
}

 

Entity('K1', '007');        