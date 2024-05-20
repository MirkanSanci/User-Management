User Management
Bu proje, kullanıcıların eklenmesini, düzenlenmesini ve silinmesini sağlayan bir kullanıcı yönetim sistemi uygulamasıdır. React ve Material-UI kullanılarak geliştirilmiştir.

Başlangıç
Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki yazılımların sisteminizde kurulu olması gerekmektedir:
Node.js
npm veya yarn 

Gerekli bağımlılıkları yükleyin:
npm install
# veya
yarn install

Projeyi başlatın:
npm start
# veya
yarn start

Kullanım
Uygulama, kullanıcı ekleme, düzenleme ve silme işlemlerini yapmanıza olanak tanır. Ayrıca kullanıcıları rol bazlı olarak filtreleyebilir ve arama yapabilirsiniz.

Özellikler

Kullanıcı Ekleme: Yeni kullanıcı ekleyebilirsiniz.
Kullanıcı Düzenleme: Var olan kullanıcı bilgilerini güncelleyebilirsiniz.
Kullanıcı Silme: Kullanıcıları silebilirsiniz.
Filtreleme: Kullanıcıları rol bazında filtreleyebilirsiniz.
Arama: Kullanıcıları isim, kullanıcı adı veya e-posta adresine göre arayabilirsiniz.
Toplu Silme: Seçili kullanıcıları veya tüm kullanıcıları toplu olarak silebilirsiniz.

Kullanıcı Arayüzü

Kullanıcı Tablosu: Kullanıcıların listelendiği tablodur. Her kullanıcı için avatar, isim, kullanıcı adı, e-posta ve rol bilgileri görüntülenir.
Kullanıcı Formu: Yeni kullanıcı eklemek veya mevcut kullanıcıyı düzenlemek için kullanılan formdur.
Filtreleme ve Arama: Kullanıcıları rol bazlı filtrelemek ve aramak için üst kısımda bulunan araçları kullanabilirsiniz.
Toplu Silme İşlemleri: Seçili kullanıcıları veya tüm kullanıcıları toplu olarak silmek için üst kısımda bulunan butonları kullanabilirsiniz.


Proje Yapısı
src/
├── components/
│   ├── UserForm.js
│   └── UserTable.js
├── pages/
│   └── UserManagement.js
├── App.js
└── index.js

src/components/UserForm.js
Kullanıcı ekleme ve düzenleme işlemlerinin yapıldığı form bileşeni.

src/components/UserTable.js
Kullanıcıların listelendiği ve çeşitli işlemlerin yapıldığı tablo bileşeni.

src/pages/UserManagement.js
Kullanıcı yönetimi sayfası. Kullanıcıların listelenmesi ve form bileşenlerinin bulunduğu ana bileşen.

src/App.js
Uygulamanın ana bileşeni. Kullanıcı yönetimi sayfasını içerir.
