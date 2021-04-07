var app = new Vue({
    el: '#root',
    data: {
      inputext:'',
      searchtext: '',
      index: 0,
      contacts: [
      	{
      		name: 'Isa',
      		avatar: '_1',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Marco',
      		avatar: '_2',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Paolo',
      		avatar: '_3',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Miriam',
      		avatar: '_4',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ]
    },
    computed: {
      filteredcontacts: function() {
        return this.contacts.filter((contact) => {
          return contact.name.toLowerCase().match(this.searchtext.toLowerCase())
        });
      }
    },
    methods:{
      selected: function(i) {
        this.index = i;
      },
      data: function (date) {
        let separa = date.split(' ');
        let array1 = separa[0].split('/');
        let nuova_data = array1[2] + '-' + array1[1] + '-' + array1[0];
        let nueva_data = nuova_data + ' ' + separa[1];
        let data = new Date(nueva_data);
        let ore = data.getHours();
        let minuti = data.getMinutes();
        return newdata = `${ore}:${minuti}`;
      },
      add: function (contatto) {
        let data = new Date();
        let oras = data.getHours();
        let minutos = data.getMinutes();
        let newda = `${oras}:${minutos}`;
        if (this.inputext != '') {
          let messaggio = {
            newda,
            text: this.inputext,
            status: 'sent'
          }
          contatto.messages.push(messaggio);
          this.inputext = '';
        }
        window.setTimeout(function() {
         let messaggio = {
           newda,
           text: 'ok',
           status: 'received'
          }
          contatto.messages.push(messaggio);
          this.inputext = '';
       }, 1000);
      },
      eliminare: function(contacts, index, messaggio, i){
        contacts[index].messages.splice(i, 1);
        console.log(contacts[index].messages);
        if (contacts[index].messages.length == 0) {
          this.index = i + 1
        }
      }
   }
});
