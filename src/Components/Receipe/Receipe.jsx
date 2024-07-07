import React, { useState } from 'react';
import './Receipe.css';
import Footer from '../Footer/Footer';
import Receipe_Data from './Receipe_Data';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Bind modal to your app element (required for accessibility)

const Receipe = () => {
    const [items, setItems] = useState(Receipe_Data);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const filterItem = (nameItem) => {
        const updateItem = Receipe_Data.filter((currElem) => {
            return currElem.name === nameItem;
        });

        setItems(updateItem);
    };

    const openModal = (item) => {
        setSelectedRecipe(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedRecipe(null);
    };

    return (
        <>
            <section className="container about" id='about'>
                <div className="order__title">
                    <div className="row">
                        <div className="col-12">
                            <h2>Previous Search</h2>
                        </div>
                    </div>
                </div>
                <div className="order__listing">
                    <div className="listing__items">
                        <span className="item__list" onClick={() => setItems(Receipe_Data)}>Everything</span>
                        <span className='item__list' onClick={() => filterItem("Pizza")}>Pizza</span>
                        <span className='item__list' onClick={() => filterItem("Burger")}>Burger</span>
                        <span className='item__list' onClick={() => filterItem("Pasta")}>Pasta</span>
                        <span className='item__list' onClick={() => filterItem("Beef")}>Beef</span>
                        <span className='item__list' onClick={() => filterItem("Drinks")}>Drinks</span>
                        <span className='item__list' onClick={() => filterItem("Ice Cream")}>Ice Cream</span>
                    </div>
                </div>
                <div className="order-food-items">
                    <div className="food-items">
                        {items.map((item) => (
                            <div key={item.id} className="food-item">
                                <img src={item.image} alt={item.name} className='img-fluid' />
                                <div className="food__details">
                                    <h3 className='mx-3'>{item.name}</h3>
                                    <p className='my-2 mx-3 food__description'>{item.description}</p>
                                </div>
                                <button onClick={() => openModal(item)}>View Recipe</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />

            {selectedRecipe && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Recipe Modal"
                    className="recipe-modal"
                    overlayClassName="recipe-modal-overlay"
                >
                    <div className="modal__photo__title">
                        <img src={selectedRecipe.image} alt={selectedRecipe.name} className='img-fluid' />
                        <h2>{selectedRecipe.description}</h2>
                    </div>
                    <p>{selectedRecipe.recipe}</p>
                    <button onClick={closeModal} className='btn recipe-modal-close'>Close</button>
                </Modal>
            )}
        </>
    );
}

export default Receipe;
