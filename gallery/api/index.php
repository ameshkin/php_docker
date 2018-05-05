<?php
/*
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
*/
/*
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
*/

//header('Content-Type: application/json');


header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");

error_reporting(E_ALL & ~E_NOTICE);

require('includes/utility.class.php');
require('includes/gallery.class.php');
//require_once '../../vendor/autoload.php';  //TODO: TWIG would have to be included in the docker build in gallery/api to work

/*
 *
    $loader = new Twig_Loader_Filesystem('../assets/templates');
    $twig = new Twig_Environment($loader, array(
      //'cache' => '/path/to/compilation_cache',
    ));

 */

//echo json_encode($return); exit;

$action = (isset($_GET['action']) ? $_GET['action'] : $flag = 1);


if($flag) {

  $return = array(
    "error"=>1,
    "message"=>"Action blank"
  );

  echo json_encode($return); exit;
}




switch ($action) {
  case 'get_galleries':


    echo Am_Utility::remove_bom(file_get_contents('data/gallery.json')); exit;



    break;
  case "get_images":



    echo Am_Utility::remove_bom(file_get_contents('data/gallery.json')); exit;





    break;

  default:
    $return = array(
      "error"=>1,
      "message"=>"Action not found"
    );
    echo Am_Utility::remove_bom(json_encode($return)); exit;

}
