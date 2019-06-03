var app = new Vue({
  el: '#app',
  data: function () {
    /* Создаём двумерный массив, который будет нашей виртуальной доской и возвращаем объект из этой в функции в data */
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    let board = columns.map(function (xValue, xIndex) {
      return rows.map(function (yValue, yIndex) {
        return {
          position: { x: xIndex, y: yIndex },
          label: xValue + yValue,

        }
      })
    })

    return {
      input: '',
      board: board,
      knight: { x: 3, y: 3 },
      result: '',
    }
  },
  methods: {


    resultFunc: function (e) {
      app.result='';
      //Введённые юзером данные преобразуем в верхний регистр
      this.input = this.input.toUpperCase();
      const userInput = this.input
      app.board.forEach(function (el) {
        el.forEach(function (el2) {
          /* if проверяет совпадает ли введённые юзером данные с любым из лэйблов доски. Если так, то начинаем вычисления */
          if (userInput === el2.label) {
            app.board.forEach(function (el3) {
              el3.forEach(function (el4) {
               /*  здесь мы проверяем добавляем в result лейблы клеток, куда может сходить конь */
                if (el4.position.x === el2.position.x + 1 && el4.position.y === el2.position.y + 2) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x + 2 && el4.position.y === el2.position.y + 1) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x - 2 && el4.position.y === el2.position.y - 1) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x - 1 && el4.position.y === el2.position.y - 2) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x + 2 && el4.position.y === el2.position.y - 1) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x - 2 && el4.position.y === el2.position.y + 1) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x + 1 && el4.position.y === el2.position.y - 2) {
                  app.result = app.result + ' ' + el4.label;
                }
                if (el4.position.x === el2.position.x - 1 && el4.position.y === el2.position.y + 2) {
                  app.result = app.result + ' ' + el4.label;
                }
              })
            })
          }
        })
      })
    }
  },
})
