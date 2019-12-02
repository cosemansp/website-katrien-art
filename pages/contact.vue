<template>
  <Layout>
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="contact-2">
          <div class="content-inner clearfix">
            <div class="row">
              <div class="col full">
                <h4>CONTACT ME</h4>
              </div>
            </div>

            <div class="divider clear" style="height:10px;"></div>

            <div class="row">
              <div class="info-box col one-third">
                <p class="desc">PHONE</p>
                <p class="info">{{ contacts[0].phone }}</p>
              </div>
              <div class="info-box col one-third">
                <p class="desc">ADDRESS</p>
                <p class="info">{{ contacts[0].address }}</p>
              </div>
              <div class="info-box col one-third">
                <p class="desc">EMAIL</p>
                <p class="info">{{ contacts[0].email }}</p>
              </div>
            </div>

            <div class="divider clear" style="height:20px;"></div>

            <div class="row">
              <div class="two-third col">
                <form method="post" action="includes/contact_form.php">
                  <input type="text" name="user_name" placeholder="NAME" />
                  <input type="email" name="user_email" placeholder="EMAIL" />
                  <input
                    type="text"
                    name="message_subject"
                    placeholder="SUBJECT"
                  />
                  <textarea
                    name="message_content"
                    placeholder="MESSAGE"
                  ></textarea>
                  <input type="button" name="submit" value="SUBMIT" />
                  <p class="message-info">Message Info.</p>
                </form>
              </div>
              <div class="one-third col">
                <p>
                  Vestibulum tellus risus, pretium et facilisis nec, porta in
                  felis. Nullm fermentum, lorem nec tincidunt tempus, lectus
                  venenatis nisi, quis ultrices tortor arcu .
                </p>

                <p>
                  felis. Nullm tellus risus, pretium fermentum, lorem nec
                  tincidunt tempus, lectus venenatis nisi, quis.
                </p>

                <div class="divider clear" style="height:10px;"></div>

                <div class="info-box">
                  <p class="desc">WORKING HOURS</p>
                  <p class="info">
                    MONDAY: 9 AM - 6 PM<br />TUESDAY: 9 AM - 6 PM<br />WEDNESDAY:
                    9 AM - 8 PM<br />THURSDAY: 9 AM - 8 PM<br />FRIDAY: 10 AM -
                    10 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="map" data-address="London, United Kingdom">
            <div class="open"><p>OPEN MAP</p></div>
            <div class="map-content"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import gql from 'graphql-tag';
import Layout from '../components/layout';

export const contacts = gql`
  query {
    contacts(where: { status: PUBLISHED }) {
      status
      id
      phone
      email
      address
      info
      location {
        latitude
        longitude
      }
    }
  }
`;

export default {
  components: {
    Layout
  },
  apollo: {
    contacts: {
      query: contacts
    }
  },
  mounted() {
    console.log('assets', this.contacts);
  }
};
</script>

<style></style>
