<template>
  <Layout>
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="contact-2">
          <div class="content-inner clearfix">
            <div class="row">
              <div class="col full">
                <h4>{{ contacts[0].title }}</h4>
              </div>
            </div>

            <div class="divider clear" style="height:10px;"></div>

            <div class="row">
              <div class="info-box col one-third">
                <p class="desc">TELEFOON</p>
                <p class="info">{{ contacts[0].phone }}</p>
              </div>
              <div class="info-box col one-third">
                <p class="desc">ADRES</p>
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
                <form
                  name="contact"
                  method="post"
                  netlify
                  netlify-honeypot="bot-field"
                  action="/contact"
                >
                  <div hidden aria-hidden="true">
                    <label>
                      Don’t fill this out if you're human:
                      <input name="bot-field" />
                    </label>
                  </div>
                  <input type="text" name="user_name" placeholder="NAAM" />
                  <input type="email" name="user_email" placeholder="EMAIL" />
                  <input
                    type="text"
                    name="message_subject"
                    placeholder="ONDERWERP"
                  />
                  <textarea
                    name="message_content"
                    placeholder="BERIGHT"
                  ></textarea>
                  <input type="button" name="submit" value="VERSTUUR" />
                  <p class="message-info">Message Info.</p>
                </form>
              </div>
              <div class="one-third col">
                <div v-html="contacts[0].info.html"></div>
              </div>
            </div>
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
      title
      email
      address
      info {
        html
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
    // console.log('assets', this.contacts);
  }
};
</script>

<style></style>
