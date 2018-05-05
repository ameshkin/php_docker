<?php



class Am_Utility{


  public static function remove_bom($data) {
    if (0 === strpos(bin2hex($data), 'efbbbf')) {
      return substr($data, 3);
    }
    return $data;
  }

}


?>