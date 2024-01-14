import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'products', id);

    getDoc(queryDoc).then((res) => {
      if (res.exists()) {
        setItem({ id: res.id, ...res.data() });
      } else {
        console.error('El producto no existe.');
      }
    });
  }, [id]);

  if (!item) {
    return <p>El producto no existe.</p>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
