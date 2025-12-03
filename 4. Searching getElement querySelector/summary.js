// Method	                  Searches by...	   Can call on an element?	     Live?
// ------------------------------------------------------------------------------------
// querySelector	          CSS-selector	      ✔	                            -
// querySelectorAll	        CSS-selector	      ✔	                            -
// getElementById	          id	                -	                            -
// getElementsByName	      name	              -	                            ✔
// getElementsByTagName	    tag or '*'	        ✔	                            ✔
// getElementsByClassName	  class	              ✔	                            ✔

// to check child-parent relationship:
// elemA.contains(elemB) returns true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB.
