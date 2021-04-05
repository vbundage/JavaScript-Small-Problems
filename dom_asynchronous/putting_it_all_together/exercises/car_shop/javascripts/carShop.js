/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const cars = [
    { make: 'Honda', image: './car_filtering_images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: './car_filtering_images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: './car_filtering_images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: './car_filtering_images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: './car_filtering_images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: './car_filtering_images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: './car_filtering_images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  const getUniqValues = (prop, arr) => {
    const props = Array.from(new Set(arr.map(obj => obj[prop])))
      .map(val => {
        const obj = {};
        obj[prop] = val;
        return obj;
      });

    return props;
  };

  const carsTemplate = Handlebars.compile(
    document.getElementById('cars-template').innerHTML);

  const templates = {};

  document.querySelectorAll('[type="text/x-handlebars"]').forEach(script => {
    const template = Handlebars.compile(script.innerHTML);
    templates[script.id] = template;
  });

  const carsApp = {
    renderFilters(cars) {
      document.querySelectorAll('select').forEach(select => {
        const template = `${select.id}-template`;
        select.innerHTML = templates[template]({ values: getUniqValues(select.id, cars) });
      });
    },

    renderCars(cars) {
      document.getElementById('cars').innerHTML = carsTemplate({ cars });
    },

    filterByMake(make, cars) {
      if (make === 'All') return cars.slice();
      return cars.filter(car => car.make === make);
    },

    filterByModel(model, cars) {
      if (model === 'All') return cars.slice();
      return cars.filter(car => car.model === model);
    },

    filterByPrice(price, cars) {
      if (price === 'Any') return cars.slice();
      return cars.filter(car => car.price === parseInt(price, 10));
    },

    filterByYear(year, cars) {
      if (year === 'Any') return cars.slice();
      return cars.filter(car => car.year === parseInt(year, 10));
    },

    filterAfterMakeSelect() {
      const selectedMake = this.makeSelect.value;
      const filteredCars = this.filterByMake(selectedMake, cars);
      this.modelSelect.innerHTML = templates[`model-template`]({ values: getUniqValues('model', filteredCars) });
      this.priceSelect.innerHTML = templates[`price-template`]({ values: getUniqValues('price', filteredCars) });
      this.yearSelect.innerHTML = templates[`year-template`]({ values: getUniqValues('year', filteredCars) });
    },

    filterAfterModelSelect() {
      const selectedModel = this.modelSelect.value;
      let filteredCars;
      if (selectedModel === 'All') {
        filteredCars = this.filterByMake(this.makeSelect.value, cars);
      } else {
        filteredCars = this.filterByModel(selectedModel, cars);
      }

      this.priceSelect.innerHTML = templates[`price-template`]({ values: getUniqValues('price', filteredCars) });
      this.yearSelect.innerHTML = templates[`year-template`]({ values: getUniqValues('year', filteredCars) });
    },

    filterAfterPriceSelect() {
      const selectedPrice = this.priceSelect.value;
      let filteredCars;
      if (selectedPrice === 'Any') {
        filteredCars = this.filterByModel(this.modelSelect.value, this.cars);
      } else {
        filteredCars = this.filterByPrice(selectedPrice, cars);
      }

      this.yearSelect.innerHTML = templates[`year-template`]({ values: getUniqValues('year', filteredCars) });
    },

    filterAll() {
      let filteredCars = cars.slice();
      filteredCars = this.filterByMake(this.form.make.value, filteredCars);
      filteredCars = this.filterByModel(this.form.model.value, filteredCars);
      filteredCars = this.filterByPrice(this.form.price.value, filteredCars);
      filteredCars = this.filterByYear(this.form.year.value, filteredCars);
      return filteredCars;
    },

    updateCars(event) {
      event.preventDefault();

      this.renderCars(this.filterAll());
    },

    bindEvents() {
      this.form.addEventListener('submit', this.updateCars.bind(this));
      this.makeSelect.addEventListener('change',
        this.filterAfterMakeSelect.bind(this));
      this.modelSelect.addEventListener('change',
        this.filterAfterModelSelect.bind(this));
      this.priceSelect.addEventListener('change',
        this.filterAfterPriceSelect.bind(this));
    },

    init() {
      this.form = document.getElementById('car-filter');
      this.makeSelect = document.getElementById('make');
      this.modelSelect = document.getElementById('model');
      this.priceSelect = document.getElementById('price');
      this.yearSelect = document.getElementById('year');
      this.cars = cars;
      this.bindEvents();
      this.renderFilters(cars);
      this.renderCars(cars);
    }
  };

  carsApp.init();
});