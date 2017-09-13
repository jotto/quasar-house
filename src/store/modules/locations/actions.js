import { Dialog, Toast } from 'quasar';
import Location from 'models/location';

export function loadLocations({ commit }) {
  Location.find({}, (err, docs)=> {
    commit('setLocations', docs);
  });
}

export function addLocation({ commit  }) {
  const options = {
    title: 'Thêm khu trọ',
    message: 'Vui lòng nhập thông tin khu trọ bạn muốn thêm bên dưới.',
    form: {
      name: {
        type: 'text',
        label: 'Tên khu trọ',
        model: null
      },
      address: {
        type: 'text',
        label: 'Địa chỉ',
        model: null
      },
      price: {
        type: 'number',
        label: 'Giá phòng',
        model: 0,
      },
      rating: {
        type: 'rating',
        label: 'Đánh giá sao',
        model: 0,
        max: 5
      }
    },
    buttons: [
      "Đóng",
      {
        label: 'Lưu',
        preventClose: true,
        handler (doc, close) {
          Location.insert(doc, (err, newDoc) => {
            commit('addLocation', newDoc);
            close();
          });
          // Toast.create('Returned ' + JSON.stringify(data))
          // close();
        }
      }
    ]
  };

  Dialog.create(options);
}
