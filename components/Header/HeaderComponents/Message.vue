<template>
  <li class="nav-item dropdown">

    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
      <i class="bi bi-chat-left-text"></i>
      <span class="badge bg-success badge-number">3</span>
    </a><!-- End Messages Icon -->

    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
      <li class="dropdown-header">
        You have 3 new messages
        <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="message-item">
        <a href="#">
          <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle">
          <div>
            <h4>Maria Hudson</h4>
            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
            <p>4 hrs. ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="message-item">
        <a href="#">
          <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle">
          <div>
            <h4>Anna Nelson</h4>
            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
            <p>6 hrs. ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="message-item">
        <a href="#">
          <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle">
          <div>
            <h4>David Muldon</h4>
            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
            <p>8 hrs. ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="dropdown-footer">
        <a href="#">Show all messages</a>
      </li>

    </ul><!-- End Messages Dropdown Items -->

  </li><!-- End Messages Nav -->

</template>

<script>
export default {
  name: "Message"
};
</script>

<style scoped>
.messages {
  inset: 8px -15px auto auto !important;
}

.message-item {
  padding: 15px 10px;
  transition: 0.3s;
}

.message-item a {
  display: flex;
}

.message-item img {
  margin: 0 20px 0 10px;
  max-height: 40px;
}

.message-item h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #444444;
}

.message-item:hover {
  background-color: #f6f9ff;
}

.nav-icon {
  font-size: 22px;
  color: #012970;
  margin-right: 25px;
  position: relative;
}

.badge-number {
  position: absolute;
  inset: -2px -5px auto auto;
  font-weight: normal;
  font-size: 12px;
  padding: 3px 6px;
}
</style>
