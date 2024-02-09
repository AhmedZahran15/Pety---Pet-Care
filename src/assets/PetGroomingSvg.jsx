import PropTypes from "prop-types";
PetGroomingSvg.propTypes = {
  color: PropTypes.string,
};
function PetGroomingSvg({ hover }) {
  return (
    <svg
      className={`${hover ? "fill-secondary" : ""}`}
      enableBackground="new 0 0 64 64"
      height="60"
      viewBox="0 0 64 64"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m41.258 32.631c.143-.077.229-.127.251-.14.475-.281.632-.893.353-1.368-.279-.476-.895-.634-1.368-.355-.003.002-.038.021-.087.048-.099-.3-.175-.619-.238-.951 3.151-2.098 4.831-5.707 4.831-10.666 0-3.28-1.941-12.037-2.023-12.408-.072-.322-.299-.588-.605-.711-.303-.123-.652-.086-.928.098-.105.07-2.392 1.614-4.146 3.631-1.576-.531-3.354-.8-5.297-.8-1.942 0-3.721.269-5.297.8-1.755-2.017-4.041-3.561-4.146-3.631-.274-.185-.624-.22-.928-.098-.307.123-.533.389-.606.711-.083.371-2.024 9.128-2.024 12.408 0 4.94 1.667 8.539 4.796 10.641-.075.32-.168.631-.28.933-.002-.001-.009-.004-.009-.005-.474-.279-1.088-.121-1.368.355-.279.476-.122 1.087.352 1.368.015.009.067.039.136.077-.356.592-.764 1.194-1.207 1.846-2.415 3.552-5.42 7.974-5.42 18.578 0 2.757 2.243 5 5 5h22c2.757 0 5-2.243 5-5 0-11.085-2.967-15.109-5.35-18.344-.52-.706-.992-1.353-1.392-2.017zm-20.258-13.432c0-2.286 1.091-7.786 1.651-10.461.876.696 2.058 1.732 2.943 2.868.274.352.749.478 1.162.313 1.504-.604 3.268-.911 5.243-.911 1.976 0 3.739.307 5.243.911.412.167.887.039 1.162-.313.883-1.133 2.066-2.17 2.943-2.868.562 2.677 1.653 8.176 1.653 10.461 0 7.161-3.701 10.792-11 10.792-7.299.001-11-3.631-11-10.792zm4.601 11.62c1.795.768 3.929 1.173 6.399 1.173 2.443 0 4.556-.397 6.338-1.148.073.281.154.553.247.814-1.561.619-3.935 1.335-6.585 1.335-2.704 0-5.117-.744-6.675-1.372.103-.261.194-.528.276-.802zm6.399 7.173c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1c0-.552.448-1 1-1zm-6.7 17.807c-.105-.053-.3-.152-.3-.807 0-1.654 1.346-3 3-3s3 1.346 3 3c0 .694-.022.973-1.716 1h-2.715c-.52-.012-.998-.055-1.269-.193zm11.984.193h-2.715c-.521-.012-.998-.055-1.27-.193-.105-.053-.3-.152-.3-.807 0-1.654 1.346-3 3-3s3 1.346 3 3c.001.694-.021.973-1.715 1zm5.716 0h-2.121c.078-.29.121-.621.121-1 0-2.757-2.243-5-5-5-1.642 0-3.088.806-4 2.031-.912-1.225-2.358-2.031-4-2.031-2.757 0-5 2.243-5 5 0 .371.055.697.137 1h-2.137c-1.654 0-3-1.346-3-3 0-9.989 2.813-14.128 5.074-17.454.48-.707.949-1.398 1.366-2.113 1.539.634 3.864 1.381 6.56 1.537v1.214c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.402-2-2.816v-1.214c2.624-.151 4.898-.864 6.437-1.487.479.823 1.031 1.584 1.603 2.359 2.21 2.999 4.96 6.73 4.96 17.157 0 1.655-1.346 3.001-3 3.001z" />
        <path d="m35 26.992c2.206 0 4-1.795 4-4 0-.552-.447-1-1-1s-1 .448-1 1c0 1.103-.898 2-2 2-.831 0-1.544-.509-1.846-1.233 1.083-.453 1.846-1.522 1.846-2.767 0-2.003-1.875-2.003-2.491-2.003l-.509.003-.509-.003c-.616 0-2.491 0-2.491 2.003 0 1.245.763 2.314 1.846 2.767-.302.723-1.015 1.233-1.846 1.233-1.103 0-2-.897-2-2 0-.552-.447-1-1-1s-1 .448-1 1c0 2.205 1.794 4 4 4 1.2 0 2.267-.542 3-1.382.733.839 1.8 1.382 3 1.382zm-3.509-6.003.509.003.509-.003c.243 0 .396.008.491.02-.01.544-.454.983-1 .983s-.99-.439-1-.983c.096-.011.248-.02.491-.02z" />
        <path d="m10 28.994c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-4 0c0-.551.448-1 1-1s1 .449 1 1-.448 1-1 1-1-.449-1-1z" />
        <path d="m13 51.994h-2c-1.654 0-3-1.346-3-3v-6.184c1.161-.415 2-1.514 2-2.816v-4.682c1.085-.519 2.024-1.318 2.723-2.318h3.277c.553 0 1-.448 1-1v-6c0-.552-.447-1-1-1h-3.262c-1.303-1.864-3.451-3-5.738-3-3.859 0-7 3.14-7 7 0 2.714 1.581 5.17 4 6.319v4.681c0 1.302.839 2.401 2 2.815v6.185c0 2.757 2.243 5 5 5h2c.553 0 1-.448 1-1s-.447-1-1-1zm-7.666-18.291c-1.994-.706-3.334-2.598-3.334-4.709 0-2.757 2.243-5 5-5 1.773 0 3.432.958 4.325 2.502.179.309.509.498.865.498h2.81v4h-2.753c-.367-.027-.736.156-.934.495-.603 1.037-1.544 1.823-2.647 2.214-.399.141-.666.519-.666.943v5.349c0 .551-.448 1-1 1s-1-.449-1-1v-5.349c0-.424-.267-.802-.666-.943z" />
        <path d="m63.121 37.881-12.5-12.5c-1.133-1.134-3.109-1.133-4.242-.001-.566.567-.879 1.32-.879 2.122 0 .702.252 1.359.692 1.894l-1.899 1.899c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.879-1.879.586.586-1.879 1.879c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.879-1.879.586.586-1.879 1.879c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.879-1.879.586.586-1.879 1.879c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.879-1.879.586.586-1.879 1.879c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.879-1.879 3.293 3.293c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.878c.566-.567.879-1.32.879-2.122s-.313-1.554-.879-2.121zm-1.414 2.828c-.379.378-1.035.378-1.414 0l-12.5-12.5c-.19-.188-.293-.44-.293-.707s.103-.518.293-.707c.189-.189.44-.293.707-.293s.518.104.707.293l12.5 12.501c.189.188.293.439.293.706 0 .268-.104.519-.293.707z" />
      </g>
    </svg>
  );
}

export default PetGroomingSvg;
