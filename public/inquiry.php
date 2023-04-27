<?php include 'inc/header.php' ?>

<main>
  <section class="content__hero">
    <div>
      <h2 class="content__heading">Inquiry</h2>
    </div>
  </section>

  <section class="index-sec-6 last-section contact-sec-2">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4">

        </div>
        <div class="col-sm-12 col-md-8 col-lg-8">
          <div class="index-left-col-wrap contact-form">
            <h6>Talk to Us</h6>
            <h2>Have question? Write a message.</h2>
            <form>
              <div class="row mt-3">
                <div class="contact-input-wrap col-sm-12 col-md-6 col-lg-6">
                  <label>Name:</label>
                  <input type="text" placeholder="Your Name">
                </div>
                <div class="contact-input-wrap col-sm-12 col-md-6 col-lg-6">
                  <label>Email:</label>
                  <input type="email" placeholder="Email Address">
                </div>
                <div class="contact-input-wrap col-sm-12 col-md-6 col-lg-6">
                  <label>Reason for contacting Us</label>
                  <input type="text" placeholder="Reason for contacting Us">
                </div>
                <div class="contact-input-wrap col-sm-12 col-md-6 col-lg-6">
                  <label>Choose Concerned Department</label>
                  <select>
                    <option selected disabled>Select a department</option>
                    <option>Billing</option>
                    <option>Marketing</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div class="contact-input-wrap col-sm-12 col-12">
                  <label>Write your message</label>
                  <textarea rows="6" placeholder="Say Whatever you want.."></textarea>
                </div>
              </div>
              <button class="btn-gradient border-0">Send Message</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </section>

</main>

<?php include 'inc/footer.php' ?>
