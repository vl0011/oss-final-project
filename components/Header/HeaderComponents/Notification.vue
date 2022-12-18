<template>
  <li class="nav-item dropdown">

    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
      <i class="bi bi-bell"></i>
      <span class="badge bg-primary badge-number">4</span>
    </a><!-- End Notification Icon -->

    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
      <li class="dropdown-header">
        You have 4 new notifications
        <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="notification-item">
        <i class="bi bi-exclamation-circle text-warning"></i>
        <div>
          <h4>Lorem Ipsum</h4>
          <p>Quae dolorem earum veritatis oditseno</p>
          <p>30 min. ago</p>
        </div>
      </li>

      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="notification-item">
        <i class="bi bi-x-circle text-danger"></i>
        <div>
          <h4>Atque rerum nesciunt</h4>
          <p>Quae dolorem earum veritatis oditseno</p>
          <p>1 hr. ago</p>
        </div>
      </li>

      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="notification-item">
        <i class="bi bi-check-circle text-success"></i>
        <div>
          <h4>Sit rerum fuga</h4>
          <p>Quae dolorem earum veritatis oditseno</p>
          <p>2 hrs. ago</p>
        </div>
      </li>

      <li>
        <hr class="dropdown-divider">
      </li>

      <li class="notification-item">
        <i class="bi bi-info-circle text-primary"></i>
        <div>
          <h4>Dicta reprehenderit</h4>
          <p>Quae dolorem earum veritatis oditseno</p>
          <p>4 hrs. ago</p>
        </div>
      </li>

      <li>
        <hr class="dropdown-divider">
      </li>
      <li class="dropdown-footer">
        <a href="#">Show all notifications</a>
      </li>

    </ul><!-- End Notification Dropdown Items -->

  </li><!-- End Notification Nav -->
</template>

<script>
export default {
  name: "Notification"
};
</script>

<style scoped>
.nav-icon {
  font-size: 22px;
  color: #012970;
  margin-right: 25px;
  position: relative;
}
.notifications {
  inset: 8px -15px auto auto !important;
}
.notification-item {
  display: flex;
  align-items: center;
  padding: 15px 10px;
  transition: 0.3s;
}
.notification-item h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}
.notification-item p {
  font-size: 13px;
  margin-bottom: 3px;
  color: #919191;
}
.notification-item:hover {
  background-color: #f6f9ff;
}
.notification-item i {
  margin: 0 20px 0 10px;
  font-size: 24px;
}

.badge-display-none{
  display: none;
}

.badge-number {
  position: absolute;
  inset: -2px -5px auto auto;
  font-weight: normal;
  font-size: 12px;
  padding: 3px 6px;
}
</style>
