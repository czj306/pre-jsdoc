/*
 * @Author: czj
 * @Date: 2021-05-10 10:50:51
 * @LastEditors: czj
 * @LastEditTime: 2021-05-10 13:07:15
 * @Description:
 */

/**
 * @param {string} [somebody] - Somebody's name.
 * @property {object}  defaults
 * @function sayHello
 * @readonly
 */
 function sayHello(somebody) {
  if (!somebody) {
      somebody = 'John Doe';
  }
  console.log('Hello ' + somebody);
}
