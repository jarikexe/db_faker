import { faker } from '@faker-js/faker';
import md5 from 'md5';
import { sha512 } from 'js-sha512'
import * as mysql2 from 'mysql2'
import * as fs from 'fs'
import { Client } from 'ssh2';


/*
CREATE NEW USERS
 */

// for (let i = 0; i <3423; i++) {
//     let date = Date.parse(faker.date.past(1));
//     console.log(`INSERT INTO user_krypto (email_user, name_user, password_user, created_date_user) VALUES ("${faker.internet.email().toLowerCase()}", "${faker.name.fullName()}", "${md5(faker.internet.email() + 123)}", "${date}");`)
// }


/*
UPDATE USER UPDATE
 */

// for ( let i = 6235; i <= 10564; i++) {
//     let date = Date.parse(faker.date.past(1));
//     console.log(`UPDATE user_krypto SET created_date_user = '${date}' WHERE id_user = ${i};`);
// }

/*
VISITS
*/

// for (let i = 6235; i <= 9661; i++) {
//     let date = Date.parse(faker.date.recent(20));
//     console.log(`UPDATE date_user_login_history SET time_visits = '${date}' WHERE id_user = ${i};`);
// }

// for (let i = 6235; i <10564; i++) {
//     let date = Date.parse(faker.date.recent(20));
//     console.log(`INSERT INTO user_login_history_krypto (id_user, date_user_login_history, ip_user_login_history, location_user_login_history) VALUES ("${i}", "${date}", "${faker.internet.ip()}", "${faker.address.city()}");`);
// }

for (let i = 6235; i <10564; i++) {
    for (let j = 0; j < 100; j++){
        let date = Date.parse(faker.date.recent(20));
        console.log(`INSERT INTO visits_krypto (id_user, time_visits, ip_visits) VALUES ("${i}", "${date}", "${faker.internet.ip()}");`);
    }
}



