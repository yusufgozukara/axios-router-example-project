import React from "react";

const About = () => {
  return (
    <div class="card">
      <div class="card-body m-4">
        <div>
          <h1 class="text-center mb-3">
            React Router Nedir? Nasıl Kullanılır?
          </h1>
          <p style={{ textIndent: "50px", textAlign: "justify" }}>
            Servis çağrısı olmadan bir uygulama yazmak neredeyse imkansız.
            Dataları saklamak, dataları çekmek bunların hepsini web servisle
            aracılığıyla yapıyoruz. Axios tam olarak bize bu konuda yardımcı
            oluyor. Detaylarını inceleyelim. Basit bir react uygulaması
            oluşturalım. Web api ile gitsin serverdan verileri getirsin.
            Detaylarını göstersin. Son olarak verilerimizi servisimiz
            aracılığıyla göndersin.
          </p>

          <p style={{ textIndent: "50px", textAlign: "justify" }}>
            Uygulamanın kodlarını github’dan indirebilirsiniz. Uygulama çok
            basit üç tane buton var. Bunlar sırasıyla serverdan postları alıyor,
            post gönderiyor ve siliyor.
          </p>

          <p style={{ textIndent: "50px", textAlign: "justify" }}>
            Öncelikle axios’u projemize import ettik. Statelerimizi tanımladık.
            UseEffect tanımladım ama kullanmadım. Sayfa yüklendikten sonra
            servis çağırmak isteseydik useeEfect hook’unu kullanacaktık. Servis
            çağrısını yapan üç fonksiyon var. Delete,post ve get. Butonların
            click eventlerine bağlı olarak çalışıyor.
            axios.get(‘http://jsonplaceholder.typicode.com/posts') sonrasında
            .then neden ? React’ın çalışma mantığını incelemek gerekiyor. C#
            gibi diller çalışma zamanında ilgili fonksiyona gidip onu
            çalıştırırken. React ve diğer javascript dilleri için durum böyle
            değil. React sayfayı yüklerken kod dosyasının en başından başlar
            sonuna kadar tüm satırlardaki kodu çalıştırır. Bu durumda biz get
            metodunu çalıştırdığımızda sonucunu beklemez ve geçer. Alt
            satırlardada değişken boş olduğu için hata verir. Yada istediğimizi
            yapamaz. İşte bu yüzden Then. Servis sonucunu .then içinde almamız
            gerekiyor. Bunu bize axios sağlıyor. Aynı zamanda then sonrasında
            hataları yakalamak için catch yazabiliyoruz.
          </p>
        </div>
        <div>
          <p style={{ textIndent: "50px", textAlign: "justify" }}>
            React Router Nedir? Web sitelerinde gezerken aynı site içerisinde
            farklı sayfalar bulunmaktadır ve biz bu sayfalar arasında linkler
            vasıtası ile rahatlıkla gezebiliyoruz. Yine tek sayfa web
            uygulamalarında da bir çok sayfa olabilir ve bu sayfalar arasında
            gezinmemiz gerekebilir. React Router Dom bu işlemin etkin bir
            şekilde yapılabilmesi ve sayfa yenlenmeden diğer bir sayfaya
            geçebilmemiz için geliştirilmiş olan bir kütüphanedir. React
            geliştiricileri arasında router kütüphanalerinden en çok kullanılanı
            React Router kütüpahanesindir. Bize etkin şekilde, sayfa
            yenilenmeden (refresh) diğer bir sayfaya geçmemiz konusunda yardımcı
            olan bu kütüphane, BrowserRouter, HashRouter, HistoryRouter,
            MemoryRouter, NativeRouter, Router ve StaticRouter seçenekleri ile
            gelmektedir. Biz bu yazımızda BrowserRouter üzerine yoğunlaşacağız
            ve web uygulaması geliştirirken sayfalar arasında geçiş
            yapabileceğimiz menü ve linkleri nasıl inşa edeceğimizi göreceğiz.
          </p>
          <p style={{ textIndent: "50px", textAlign: "justify" }}>
            React Router Dom React Router kütüphanesi sayfalar arasında gezinmek
            için bize etkin bir yol sunar. Bunu web uygulamasında
            kullanabilmemiz için React Router Dom kütüphanesi devreye giriyor.
            Bu kütüphanede bulunan bileşenler (component) sayesinde uygulama
            sayfaları arasında gezinmek oldukça kolaylaşıyor. Bu yazımız React
            Router Dom 6 temel alınarak hazırlandı. Daha önceki sürümlerde
            farklılıklar olabilir. Mesela daha önce kullanılan Switch bileşeni
            6. sürüm ile birlikte kaldırıldı. React Router Dom 6 ile bize gelen
            bileşenler (component) şu şekilde sıralanabilir. BrowserRouter, HTML
            5 History API üzerine kurulmuştur. Sayfa yönlendirmelerini tutan ana
            bileşendir. Route yapısı kullanılacak tüm bileşenler / sayfalar
            BrowserRouter arasında olmak zorundadır. Routers, adresi verilen
            sayfanın görüntülenmesini sağlar. Route, bir sayfayı uygulamaya
            eklemek için kullanılır. Sayfa adresi (url) ve o sayfada
            çalıştırılacak bileşeni (component) değer olarak alır. Link, bir
            sayfaya link vermek için kullanılan bileşendir. Sayfa adresini alır.
            Kullanımı HTML A Etiketi gibidir. Fakat A etiketinde olduğu gibi
            sayfa yenilenmesi olmaz. Outlet, bir route altında farklı bir route
            ( çocuk / child ) göstermek için kullanılır. Navigate, program
            üzerinden istenilen sayfaya gitmek için kullanılır. Kullanıcının bir
            linke veya butona tıklaması beklenmez. NavLink, daha etkili menüler
            oluşturmak için kullanılır. BrowserRouter yönlendirme yapılacak tüm
            bileşenleri kapsamak zorundadır. Yine Routers tüm Route
            bileşenlerini kapsar. Böylece sayfa adresleri belirtilir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
