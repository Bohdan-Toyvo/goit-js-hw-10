'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const delay = form.elements.delay.value;
    const state = form.elements.state.value;

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                title: 'Fulfilled Promise',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: 'Rejected Promise',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
            });
        });

    form.reset();
}

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}
