const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//num 1 
const personAccount = {
    firstName: 'Salamat',
    lastName: 'Ismael',
    incomes: {
        baking: 4, 
        sewing: 8
    },

    expenses: {
        subscription: 3,
        feeding: 5,
        transportation: 2,
    },

   totalIncome: function () {
    return 12;
   },

   totalExpense: function () {
    return 10;
   },

   accountInfo: function () {
    return `${personAccount}`;
   },
   addIncome: function () {
    return 12;
   },

   addExpense: function () {
    return 10;
   }
}

//num 2a

//2b
const signIn = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i] === username && users[0].password === password) {
            return users[i];
        } else {
            return "wrong username or password";
        }
    }
}
console.log(signIn('Brook', 123111))

//num 3a 

//num 3b

//num 4
function likeProduct (name) {
    for (let i = 0; i < products.length; i++) {
        if (name === products[i]) {

            if (!products[i].likes) {
                console.log(like);
                let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(chars[Math.floor(Math.random() * chars.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
}
console.log(
    likeProduct("mobile phone"));