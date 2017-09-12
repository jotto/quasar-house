import { Dialog, Toast } from 'quasar';

export function addLocation() {
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
        handler (data, close) {
          Toast.create('Returned ' + JSON.stringify(data))
          close();
        }
      }
    ]
  };

  Dialog.create(options);
}
