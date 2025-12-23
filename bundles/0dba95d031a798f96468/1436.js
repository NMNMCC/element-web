"use strict";
(globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || []).push([[1436],{

/***/ "./src/stores/room-list-v3/RoomListStoreV3.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LISTS_LOADED_EVENT: () => (/* binding */ LISTS_LOADED_EVENT),
  LISTS_UPDATE_EVENT: () => (/* binding */ LISTS_UPDATE_EVENT),
  "default": () => (/* binding */ RoomListStoreV3)
});

// UNUSED EXPORTS: RoomListStoreV3Class, RoomListStoreV3Event

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("./node_modules/core-js/modules/es.error.cause.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.constructor.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.filter.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");
// EXTERNAL MODULE: ./matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./src/stores/AsyncStoreWithClient.ts
var AsyncStoreWithClient = __webpack_require__("./src/stores/AsyncStoreWithClient.ts");
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ./src/stores/room-list/filters/VisibilityProvider.ts
var VisibilityProvider = __webpack_require__("./src/stores/room-list/filters/VisibilityProvider.ts");
// EXTERNAL MODULE: ./src/dispatcher/dispatcher.ts
var dispatcher = __webpack_require__("./src/dispatcher/dispatcher.ts");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__("./node_modules/core-js/modules/esnext.map.delete-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.emplace.js
var esnext_map_emplace = __webpack_require__("./node_modules/core-js/modules/esnext.map.emplace.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__("./node_modules/core-js/modules/esnext.map.every.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__("./node_modules/core-js/modules/esnext.map.filter.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__("./node_modules/core-js/modules/esnext.map.find.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__("./node_modules/core-js/modules/esnext.map.find-key.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__("./node_modules/core-js/modules/esnext.map.includes.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__("./node_modules/core-js/modules/esnext.map.key-of.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__("./node_modules/core-js/modules/esnext.map.map-keys.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__("./node_modules/core-js/modules/esnext.map.map-values.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__("./node_modules/core-js/modules/esnext.map.merge.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__("./node_modules/core-js/modules/esnext.map.reduce.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__("./node_modules/core-js/modules/esnext.map.some.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__("./node_modules/core-js/modules/esnext.map.update.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.difference.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.intersection.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.union.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.some.js
var esnext_iterator_some = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.some.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__("./node_modules/core-js/modules/esnext.set.add-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__("./node_modules/core-js/modules/esnext.set.delete-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__("./node_modules/core-js/modules/esnext.set.difference.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__("./node_modules/core-js/modules/esnext.set.every.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__("./node_modules/core-js/modules/esnext.set.filter.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__("./node_modules/core-js/modules/esnext.set.find.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__("./node_modules/core-js/modules/esnext.set.intersection.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__("./node_modules/core-js/modules/esnext.set.is-disjoint-from.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__("./node_modules/core-js/modules/esnext.set.is-subset-of.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__("./node_modules/core-js/modules/esnext.set.is-superset-of.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__("./node_modules/core-js/modules/esnext.set.join.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__("./node_modules/core-js/modules/esnext.set.map.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__("./node_modules/core-js/modules/esnext.set.reduce.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__("./node_modules/core-js/modules/esnext.set.some.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__("./node_modules/core-js/modules/esnext.set.symmetric-difference.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__("./node_modules/core-js/modules/esnext.set.union.js");
// EXTERNAL MODULE: ./src/stores/spaces/SpaceStore.ts + 3 modules
var SpaceStore = __webpack_require__("./src/stores/spaces/SpaceStore.ts");
;// ./src/stores/room-list-v3/skip-list/RoomNode.ts


























/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Room skip list stores room nodes.
 * These hold the actual room object and provides references to other nodes
 * in different levels.
 */
class RoomNode {
  constructor(room) {
    (0,defineProperty/* default */.A)(this, "_isInActiveSpace", false);
    /**
     * This array holds references to the next node in a given level.
     * eg: next[i] gives the next room node from this room node in level i.
     */
    (0,defineProperty/* default */.A)(this, "next", []);
    /**
     * This array holds references to the previous node in a given level.
     * eg: previous[i] gives the previous room node from this room node in level i.
     */
    (0,defineProperty/* default */.A)(this, "previous", []);
    /**
     * Aggregates all the filter keys that apply to this room.
     * eg: if filterKeysSet.has(Filter.FavouriteFilter) is true, then this room is a favourite room.
     */
    (0,defineProperty/* default */.A)(this, "filterKeysSet", new Set());
    this.room = room;
  }
  /**
   * Whether the room associated with this room node belongs to
   * the currently active space.
   * @see {@link SpaceStoreClass#activeSpace} to understand what active
   * space means.
   */
  get isInActiveSpace() {
    return this._isInActiveSpace;
  }

  /**
   * Check if this room belongs to the active space and store the result
   * in {@link RoomNode#isInActiveSpace}.
   */
  checkIfRoomBelongsToActiveSpace() {
    const activeSpace = SpaceStore/* default */.Ay.instance.activeSpace;
    this._isInActiveSpace = SpaceStore/* default */.Ay.instance.isRoomInSpace(activeSpace, this.room.roomId);
  }
  /**
   * Returns true if the associated room matches all the provided filters.
   * Returns false otherwise.
   * @param filterKeys An array of filter keys to check against.
   */
  doesRoomMatchFilters(filterKeys) {
    return !filterKeys.some(key => !this.filterKeysSet.has(key));
  }

  /**
   * Populates {@link RoomNode#filterKeysSet} by checking if the associated room
   * satisfies the given filters.
   * @param filters A list of filters
   */
  applyFilters(filters) {
    this.filterKeysSet = new Set();
    for (const filter of filters) {
      if (filter.matches(this.room)) this.filterKeysSet.add(filter.key);
    }
  }
}
;// ./src/stores/room-list-v3/skip-list/utils.ts
/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

function shouldPromote() {
  return Math.random() < 0.5;
}
;// ./src/stores/room-list-v3/skip-list/Level.ts

/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Represents one level of the skip list
 */
class Level {
  /**
   * The number of elements in this level
   */
  get size() {
    return this._size;
  }
  constructor(level) {
    (0,defineProperty/* default */.A)(this, "head", void 0);
    (0,defineProperty/* default */.A)(this, "current", void 0);
    (0,defineProperty/* default */.A)(this, "_size", 0);
    this.level = level;
  }

  /**
   * Insert node after current
   */
  setNext(node) {
    if (!this.head) this.head = node;
    if (!this.current) {
      this.current = node;
    } else {
      node.previous[this.level] = this.current;
      this.current.next[this.level] = node;
      this.current = node;
    }
    this._size++;
  }

  /**
   * Iterate through the elements in this level and create
   * a new level above this level by probabilistically determining
   * whether a given element must be promoted to the new level.
   */
  generateNextLevel() {
    const nextLevelSentinel = new Level(this.level + 1);
    let current = this.head;
    while (current) {
      if (shouldPromote()) {
        nextLevelSentinel.setNext(current);
      }
      current = current.next[this.level];
    }
    return nextLevelSentinel;
  }

  /**
   * Removes a given node from this level.
   * Does nothing if the given node is not present in this level.
   */
  removeNode(node) {
    // Let's first see if this node is even in this level
    const nodeInThisLevel = this.head === node || node.previous[this.level];
    if (!nodeInThisLevel) {
      // This node is not in this sentinel level, so nothing to do.
      return;
    }
    const prev = node.previous[this.level];
    if (prev) {
      const nextNode = node.next[this.level];
      prev.next[this.level] = nextNode;
      if (nextNode) nextNode.previous[this.level] = prev;
    } else {
      // This node was the head since it has no back links!
      // so update the head.
      const next = node.next[this.level];
      this.head = next;
      if (next) next.previous[this.level] = node.previous[this.level];
    }
    this._size--;
  }

  /**
   * Put newNode after node in this level. No checks are done to ensure
   * that node is actually present in this level.
   */
  insertAfter(node, newNode) {
    const level = this.level;
    const nextNode = node.next[level];
    if (nextNode) {
      newNode.next[level] = nextNode;
      nextNode.previous[level] = newNode;
    }
    node.next[level] = newNode;
    newNode.previous[level] = node;
    this._size++;
  }

  /**
   *  Insert a given node at the head of this level.
   */
  insertAtHead(newNode) {
    const existingNode = this.head;
    this.head = newNode;
    if (existingNode) {
      newNode.next[this.level] = existingNode;
      existingNode.previous[this.level] = newNode;
    }
    this._size++;
  }
}
;// ./src/stores/room-list-v3/skip-list/iterators.ts
/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

class SortedRoomIterator {
  constructor(current) {
    this.current = current;
  }
  next() {
    const current = this.current;
    if (!current) return {
      value: undefined,
      done: true
    };
    this.current = current.next[0];
    return {
      value: current.room
    };
  }
}
class SortedSpaceFilteredIterator {
  constructor(current, filters) {
    this.current = current;
    this.filters = filters;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let current = this.current;
    while (current) {
      if (current.isInActiveSpace && current.doesRoomMatchFilters(this.filters)) break;
      current = current.next[0];
    }
    if (!current) return {
      value: undefined,
      done: true
    };
    this.current = current.next[0];
    return {
      value: current.room
    };
  }
}
;// ./src/stores/room-list-v3/skip-list/RoomSkipList.ts


















/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/**
 * Implements a skip list that stores rooms using a given sorting algorithm.
 * See See https://en.wikipedia.org/wiki/Skip_list
 */
class RoomSkipList {
  constructor(sorter, filters = []) {
    (0,defineProperty/* default */.A)(this, "levels", [new Level(0)]);
    (0,defineProperty/* default */.A)(this, "roomNodeMap", new Map());
    (0,defineProperty/* default */.A)(this, "initialized", false);
    this.sorter = sorter;
    this.filters = filters;
  }
  reset() {
    this.levels = [new Level(0)];
    this.roomNodeMap = new Map();
  }

  /**
   * Seed the list with an initial list of rooms.
   */
  seed(rooms) {
    // 1. First sort the rooms and create a base sorted linked list
    const sortedRoomNodes = this.sorter.sort(rooms).map(room => new RoomNode(room));
    let currentLevel = this.levels[0];
    for (const node of sortedRoomNodes) {
      node.applyFilters(this.filters);
      currentLevel.setNext(node);
      this.roomNodeMap.set(node.room.roomId, node);
    }

    // 2. Create the rest of the sub linked lists
    do {
      this.levels[currentLevel.level] = currentLevel;
      currentLevel = currentLevel.generateNextLevel();
    } while (currentLevel.size > 1);

    // 3. Go through the list of rooms and mark nodes in active space
    this.calculateActiveSpaceForNodes();
    this.initialized = true;
  }

  /**
   * Go through all the room nodes and check if they belong to the active space.
   */
  calculateActiveSpaceForNodes() {
    for (const node of this.roomNodeMap.values()) {
      node.checkIfRoomBelongsToActiveSpace();
    }
  }

  /**
   * Change the sorting algorithm used by the skip list.
   * This will reset the list and will rebuild from scratch.
   */
  useNewSorter(sorter, rooms) {
    this.reset();
    this.sorter = sorter;
    this.seed(rooms);
  }

  /**
   * Removes a given room from the skip list.
   */
  removeRoom(room) {
    const existingNode = this.roomNodeMap.get(room.roomId);
    this.roomNodeMap.delete(room.roomId);
    if (existingNode) {
      for (const level of this.levels) {
        level.removeNode(existingNode);
      }
    }
  }

  /**
   * Re-inserts a room that is already in the skiplist.
   * This method does nothing if the room isn't already in the skiplist.
   * @param room the room to add
   */
  reInsertRoom(room) {
    if (!this.roomNodeMap.has(room.roomId)) {
      return;
    }
    this.removeRoom(room);
    this.addNewRoom(room);
  }

  /**
   * Adds a new room to the skiplist.
   * This method will throw an error if the room is already in the skiplist.
   * @param room the room to add
   */
  addNewRoom(room) {
    if (this.roomNodeMap.has(room.roomId)) {
      throw new Error(`Can't add room to skiplist: ${room.roomId} is already in the skiplist!`);
    }
    this.insertRoom(room);
  }

  /**
   * Adds a given room to the correct sorted position in the list.
   */
  insertRoom(room) {
    const newNode = new RoomNode(room);
    newNode.checkIfRoomBelongsToActiveSpace();
    newNode.applyFilters(this.filters);
    this.roomNodeMap.set(room.roomId, newNode);

    /**
     * This array tracks where the new node must be inserted in a
     * given level.
     * The index is the level and the value represents where the
     * insertion must happen.
     * If the value is null, it simply means that we need to insert
     * at the head.
     * If the value is a RoomNode, simply insert after this node.
     */
    const insertionNodes = [];

    /**
     * Now we'll do the actual work of finding where to insert this
     * node.
     *
     * We start at the top most level and move downwards ...
     */
    for (let j = this.levels.length - 1; j >= 0; --j) {
      const level = this.levels[j];

      /**
       * If the head is undefined, that means this level is empty.
       * So mark it as such in insertionNodes and skip over this
       * level.
       */
      if (!level.head) {
        insertionNodes[j] = null;
        continue;
      }

      /**
       * So there's actually some nodes in this level ...
       * All we need to do is find the node that is smaller or
       * equal to the node that we wish to insert.
       */
      let current = level.head;
      let previous = null;
      while (current) {
        if (this.sorter.comparator(current.room, room) < 0) {
          previous = current;
          current = current.next[j];
        } else break;
      }

      /**
       * previous will now be null if there's no node in this level
       * smaller than the node we wish to insert or it will be a
       * RoomNode.
       * This is exactly what we need to track in insertionNodes!
       */
      insertionNodes[j] = previous;
    }

    /**
     * We're done with difficult part, now we just need to do the
     * actual node insertion.
     */
    for (const [level, node] of insertionNodes.entries()) {
      /**
       * Whether our new node should be present in a level
       * is decided by coin toss.
       */
      if (level === 0 || shouldPromote()) {
        const levelObj = this.levels[level];
        if (node) levelObj.insertAfter(node, newNode);else levelObj.insertAtHead(newNode);
      } else {
        break;
      }
    }
  }
  [Symbol.iterator]() {
    return new SortedRoomIterator(this.levels[0].head);
  }

  /**
   * Returns an iterator that can be used to generate a list of sorted rooms that belong
   * to the currently active space. Passing filterKeys will further filter the list such
   * that only rooms that match the filters are returned.
   *
   * @example To get an array of rooms:
   * Array.from(RLS.getRoomsInActiveSpace());
   *
   * @example Use a for ... of loop to iterate over rooms:
   * for(const room of RLS.getRoomsInActiveSpace()) { something(room); }
   *
   * @example Additional filtering:
   * Array.from(RLS.getRoomsInActiveSpace([FilterKeys.Favourite]));
   */
  getRoomsInActiveSpace(filterKeys = []) {
    return new SortedSpaceFilteredIterator(this.levels[0].head, filterKeys);
  }

  /**
   * The number of rooms currently in the skip list.
   */
  get size() {
    return this.levels[0].size;
  }

  /**
   * The currently active sorting algorithm.
   */
  get activeSortAlgorithm() {
    return this.sorter.type;
  }
}
// EXTERNAL MODULE: ./src/stores/room-list-v3/skip-list/sorters/index.ts
var sorters = __webpack_require__("./src/stores/room-list-v3/skip-list/sorters/index.ts");
// EXTERNAL MODULE: ./src/stores/room-list/algorithms/tag-sorting/RecentAlgorithm.ts
var RecentAlgorithm = __webpack_require__("./src/stores/room-list/algorithms/tag-sorting/RecentAlgorithm.ts");
// EXTERNAL MODULE: ./src/stores/notifications/RoomNotificationStateStore.ts + 3 modules
var RoomNotificationStateStore = __webpack_require__("./src/stores/notifications/RoomNotificationStateStore.ts");
// EXTERNAL MODULE: ./src/stores/room-list/models.ts
var models = __webpack_require__("./src/stores/room-list/models.ts");
;// ./src/stores/room-list-v3/skip-list/sorters/RecencySorter.ts
/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





class RecencySorter {
  constructor(myUserId) {
    this.myUserId = myUserId;
  }
  sort(rooms) {
    const tsCache = {};
    return [...rooms].sort((a, b) => this.comparator(a, b, tsCache));
  }
  comparator(roomA, roomB, cache) {
    // First check if the rooms are low priority or muted
    const exceptionalOrdering = this.getScore(roomA) - this.getScore(roomB);
    if (exceptionalOrdering !== 0) return exceptionalOrdering;

    // Then check recency; recent rooms should be at the top
    const roomALastTs = this.getTs(roomA, cache);
    const roomBLastTs = this.getTs(roomB, cache);
    return roomBLastTs - roomALastTs;
  }
  get type() {
    return sorters/* SortingAlgorithm */.U.Recency;
  }

  /**
   * This sorter mostly sorts rooms by recency but there are two exceptions:
   * 1. Muted rooms are sorted to the bottom of the list.
   * 2. Low priority rooms are sorted to the bottom of the list but before muted rooms.
   *
   * The following method provides a numerical value that takes care of this
   * exceptional ordering. For two rooms A and B, it works as follows:
   * - If getScore(A) - getScore(B) > 0, A should come after B
   * - If getScore(A) - getScore(B) < 0, A should come before B
   * - If getScore(A) - getScore(B) = 0, no special ordering needed, just use recency
   */
  getScore(room) {
    const isLowPriority = !!room.tags[models/* DefaultTagID */.zO.LowPriority];
    const isMuted = RoomNotificationStateStore/* RoomNotificationStateStore */.n.instance.getRoomState(room).muted;
    // These constants are chosen so that the following order is maintained:
    // Low priority rooms -> Low priority and muted rooms -> Muted rooms
    if (isMuted && isLowPriority) return 5;else if (isMuted) return 10;else if (isLowPriority) return 2;else return 0;
  }
  getTs(room, cache) {
    var _cache$room$roomId;
    const ts = (_cache$room$roomId = cache === null || cache === void 0 ? void 0 : cache[room.roomId]) !== null && _cache$room$roomId !== void 0 ? _cache$room$roomId : (0,RecentAlgorithm/* getLastTs */.Qi)(room, this.myUserId);
    if (cache) {
      cache[room.roomId] = ts;
    }
    return ts;
  }
}
;// ./src/stores/room-list-v3/skip-list/sorters/AlphabeticSorter.ts

/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


class AlphabeticSorter {
  constructor() {
    (0,defineProperty/* default */.A)(this, "collator", new Intl.Collator());
  }
  sort(rooms) {
    return [...rooms].sort((a, b) => {
      return this.comparator(a, b);
    });
  }
  comparator(roomA, roomB) {
    return this.collator.compare(roomA.name, roomB.name);
  }
  get type() {
    return sorters/* SortingAlgorithm */.U.Alphabetic;
  }
}
// EXTERNAL MODULE: ./src/utils/read-receipts.ts
var read_receipts = __webpack_require__("./src/utils/read-receipts.ts");
// EXTERNAL MODULE: ./src/utils/membership.ts
var membership = __webpack_require__("./src/utils/membership.ts");
// EXTERNAL MODULE: ./src/stores/spaces/index.ts
var spaces = __webpack_require__("./src/stores/spaces/index.ts");
// EXTERNAL MODULE: ./src/stores/room-list-v3/skip-list/filters/index.ts
var filters = __webpack_require__("./src/stores/room-list-v3/skip-list/filters/index.ts");
;// ./src/stores/room-list-v3/skip-list/filters/FavouriteFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



class FavouriteFilter {
  matches(room) {
    return !!room.tags[models/* DefaultTagID */.zO.Favourite];
  }
  get key() {
    return filters/* FilterKey */.M.FavouriteFilter;
  }
}
// EXTERNAL MODULE: ./src/utils/notifications.ts
var notifications = __webpack_require__("./src/utils/notifications.ts");
;// ./src/stores/room-list-v3/skip-list/filters/UnreadFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




class UnreadFilter {
  matches(room) {
    return RoomNotificationStateStore/* RoomNotificationStateStore */.n.instance.getRoomState(room).hasUnreadCount || !!(0,notifications/* getMarkedUnreadState */.nx)(room);
  }
  get key() {
    return filters/* FilterKey */.M.UnreadFilter;
  }
}
// EXTERNAL MODULE: ./src/utils/DMRoomMap.ts
var DMRoomMap = __webpack_require__("./src/utils/DMRoomMap.ts");
;// ./src/stores/room-list-v3/skip-list/filters/PeopleFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



class PeopleFilter {
  matches(room) {
    // Match rooms that are DMs
    return !!DMRoomMap/* default */.A.shared().getUserIdForRoomId(room.roomId);
  }
  get key() {
    return filters/* FilterKey */.M.PeopleFilter;
  }
}
;// ./src/stores/room-list-v3/skip-list/filters/RoomsFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



class RoomsFilter {
  matches(room) {
    // This should filter rooms that are not DMs
    return !DMRoomMap/* default */.A.shared().getUserIdForRoomId(room.roomId);
  }
  get key() {
    return filters/* FilterKey */.M.RoomsFilter;
  }
}
;// ./src/stores/room-list-v3/skip-list/filters/InvitesFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



class InvitesFilter {
  matches(room) {
    return room.getMyMembership() === matrix.KnownMembership.Invite;
  }
  get key() {
    return filters/* FilterKey */.M.InvitesFilter;
  }
}
;// ./src/stores/room-list-v3/skip-list/filters/MentionsFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



class MentionsFilter {
  matches(room) {
    return RoomNotificationStateStore/* RoomNotificationStateStore */.n.instance.getRoomState(room).isMention;
  }
  get key() {
    return filters/* FilterKey */.M.MentionsFilter;
  }
}
;// ./src/stores/room-list-v3/skip-list/filters/LowPriorityFilter.ts
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



class LowPriorityFilter {
  matches(room) {
    return !!room.tags[models/* DefaultTagID */.zO.LowPriority];
  }
  get key() {
    return filters/* FilterKey */.M.LowPriorityFilter;
  }
}
// EXTERNAL MODULE: ./src/settings/SettingLevel.ts
var SettingLevel = __webpack_require__("./src/settings/SettingLevel.ts");
// EXTERNAL MODULE: ./src/stores/room-list/utils/roomMute.ts
var roomMute = __webpack_require__("./src/stores/room-list/utils/roomMute.ts");
// EXTERNAL MODULE: ./src/dispatcher/actions.ts
var actions = __webpack_require__("./src/dispatcher/actions.ts");
;// ./src/stores/room-list-v3/RoomListStoreV3.ts





/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



























/**
 * These are the filters passed to the room skip list.
 */
const FILTERS = [new FavouriteFilter(), new UnreadFilter(), new PeopleFilter(), new RoomsFilter(), new InvitesFilter(), new MentionsFilter(), new LowPriorityFilter()];
let RoomListStoreV3Event = /*#__PURE__*/function (RoomListStoreV3Event) {
  // The event/channel which is called when the room lists have been changed.
  RoomListStoreV3Event["ListsUpdate"] = "lists_update";
  // The event which is called when the room list is loaded.
  RoomListStoreV3Event["ListsLoaded"] = "lists_loaded";
  return RoomListStoreV3Event;
}({});

// The result object for returning rooms from the store

const LISTS_UPDATE_EVENT = RoomListStoreV3Event.ListsUpdate;
const LISTS_LOADED_EVENT = RoomListStoreV3Event.ListsLoaded;
/**
 * This store allows for fast retrieval of the room list in a sorted and filtered manner.
 * This is the third such implementation hence the "V3".
 * This store is being actively developed so expect the methods to change in future.
 */
class RoomListStoreV3Class extends AsyncStoreWithClient/* AsyncStoreWithClient */.r {
  constructor(dispatcher) {
    super(dispatcher);
    (0,defineProperty/* default */.A)(this, "roomSkipList", void 0);
    (0,defineProperty/* default */.A)(this, "msc3946ProcessDynamicPredecessor", void 0);
    this.msc3946ProcessDynamicPredecessor = SettingsStore/* default */.A.getValue("feature_dynamic_room_predecessors");
    SpaceStore/* default */.Ay.instance.on(spaces/* UPDATE_SELECTED_SPACE */.tw, () => {
      this.onActiveSpaceChanged();
    });
    SpaceStore/* default */.Ay.instance.on(spaces/* UPDATE_HOME_BEHAVIOUR */.EC, () => this.onActiveSpaceChanged());
  }

  /**
   * Get a list of unsorted, unfiltered rooms.
   */
  getRooms() {
    var _this$matrixClient$ge, _this$matrixClient;
    let rooms = (_this$matrixClient$ge = (_this$matrixClient = this.matrixClient) === null || _this$matrixClient === void 0 ? void 0 : _this$matrixClient.getVisibleRooms(this.msc3946ProcessDynamicPredecessor)) !== null && _this$matrixClient$ge !== void 0 ? _this$matrixClient$ge : [];
    rooms = rooms.filter(r => VisibilityProvider/* VisibilityProvider */.W.instance.isRoomVisible(r));
    return rooms;
  }

  /**
   * Check whether the initial list of rooms has loaded.
   */
  get isLoadingRooms() {
    var _this$roomSkipList;
    return !((_this$roomSkipList = this.roomSkipList) !== null && _this$roomSkipList !== void 0 && _this$roomSkipList.initialized);
  }

  /**
   * Get a list of sorted rooms.
   */
  getSortedRooms() {
    var _this$roomSkipList2;
    if ((_this$roomSkipList2 = this.roomSkipList) !== null && _this$roomSkipList2 !== void 0 && _this$roomSkipList2.initialized) return Array.from(this.roomSkipList);else return [];
  }

  /**
   * Get a list of sorted rooms that belong to the currently active space.
   * If filterKeys is passed, only the rooms that match the given filters are
   * returned.
    * @param filterKeys Optional array of filters that the rooms must match against.
   */
  getSortedRoomsInActiveSpace(filterKeys) {
    var _this$roomSkipList3;
    const spaceId = SpaceStore/* default */.Ay.instance.activeSpace;
    if ((_this$roomSkipList3 = this.roomSkipList) !== null && _this$roomSkipList3 !== void 0 && _this$roomSkipList3.initialized) return {
      spaceId: spaceId,
      filterKeys,
      rooms: Array.from(this.roomSkipList.getRoomsInActiveSpace(filterKeys))
    };else return {
      spaceId: spaceId,
      filterKeys,
      rooms: []
    };
  }

  /**
   * Resort the list of rooms using a different algorithm.
   * @param algorithm The sorting algorithm to use.
   */
  resort(algorithm) {
    if (!this.roomSkipList) throw new Error("Cannot resort room list before skip list is created.");
    if (!this.matrixClient) throw new Error("Cannot resort room list without matrix client.");
    if (this.roomSkipList.activeSortAlgorithm === algorithm) return;
    const sorter = algorithm === sorters/* SortingAlgorithm */.U.Alphabetic ? new AlphabeticSorter() : new RecencySorter(this.matrixClient.getSafeUserId());
    this.roomSkipList.useNewSorter(sorter, this.getRooms());
    this.emit(LISTS_UPDATE_EVENT);
    SettingsStore/* default */.A.setValue("RoomList.preferredSorting", null, SettingLevel/* SettingLevel */.p.DEVICE, algorithm);
  }

  /**
   * Currently active sorting algorithm if the store is ready or undefined otherwise.
   */
  get activeSortAlgorithm() {
    var _this$roomSkipList4;
    return (_this$roomSkipList4 = this.roomSkipList) === null || _this$roomSkipList4 === void 0 ? void 0 : _this$roomSkipList4.activeSortAlgorithm;
  }
  async onReady() {
    var _this$roomSkipList5;
    if ((_this$roomSkipList5 = this.roomSkipList) !== null && _this$roomSkipList5 !== void 0 && _this$roomSkipList5.initialized || !this.matrixClient) return;
    const sorter = this.getPreferredSorter(this.matrixClient.getSafeUserId());
    this.roomSkipList = new RoomSkipList(sorter, FILTERS);
    await SpaceStore/* default */.Ay.instance.storeReadyPromise;
    const rooms = this.getRooms();
    this.roomSkipList.seed(rooms);
    this.emit(LISTS_LOADED_EVENT);
    this.emit(LISTS_UPDATE_EVENT);
  }
  async onAction(payload) {
    var _this$roomSkipList6;
    if (!this.matrixClient || !((_this$roomSkipList6 = this.roomSkipList) !== null && _this$roomSkipList6 !== void 0 && _this$roomSkipList6.initialized)) return;

    /**
     * For the kind of updates that we care about (represented by the cases below),
     * we try to find the associated room and simply re-insert it into the
     * skiplist. If the position of said room in the sorted list changed, re-inserting
     * would put it in the correct place.
     */
    switch (payload.action) {
      case "MatrixActions.Room.receipt":
        {
          if ((0,read_receipts/* readReceiptChangeIsFor */.A)(payload.event, this.matrixClient)) {
            const room = payload.room;
            if (!room) {
              logger/* logger */.vF.warn(`Own read receipt was in unknown room ${room.roomId}`);
              return;
            }
            this.addRoomAndEmit(room);
          }
          break;
        }
      case "MatrixActions.Room.tags":
        {
          const room = payload.room;
          this.addRoomAndEmit(room);
          break;
        }
      case "MatrixActions.Room.accountData":
        {
          const eventType = payload.event_type;
          if (eventType === notifications/* MARKED_UNREAD_TYPE_STABLE */.uk || eventType === notifications/* MARKED_UNREAD_TYPE_UNSTABLE */.HG) {
            const room = payload.room;
            this.addRoomAndEmit(room);
          }
          break;
        }
      case "MatrixActions.Event.decrypted":
        {
          const roomId = payload.event.getRoomId();
          if (!roomId) return;
          const room = this.matrixClient.getRoom(roomId);
          if (!room) {
            logger/* logger */.vF.warn(`Event ${payload.event.getId()} was decrypted in an unknown room ${roomId}`);
            return;
          }
          this.addRoomAndEmit(room);
          break;
        }
      case "MatrixActions.accountData":
        {
          this.handleAccountDataPayload(payload);
          break;
        }
      case "MatrixActions.Room.timeline":
        {
          // Ignore non-live events (backfill) and notification timeline set events (without a room)
          if (!payload.isLiveEvent || !payload.isLiveUnfilteredRoomTimelineEvent || !payload.room) return;
          this.addRoomAndEmit(payload.room);
          break;
        }
      case "MatrixActions.Room.myMembership":
        {
          var _getMember;
          const oldMembership = (0,membership/* getEffectiveMembership */.Cs)(payload.oldMembership);
          const newMembership = (0,membership/* getEffectiveMembershipTag */.E3)(payload.room, payload.membership);

          // If the user is kicked, re-insert the room and do nothing more.
          const ownUserId = this.matrixClient.getSafeUserId();
          const isKicked = (_getMember = payload.room.getMember(ownUserId)) === null || _getMember === void 0 ? void 0 : _getMember.isKicked();
          if (isKicked) {
            this.addRoomAndEmit(payload.room);
            return;
          }
          // If the user has left this room, remove it from the skiplist.
          if ((oldMembership === membership/* EffectiveMembership */._T.Invite || oldMembership === membership/* EffectiveMembership */._T.Join) && newMembership === membership/* EffectiveMembership */._T.Leave) {
            this.roomSkipList.removeRoom(payload.room);
            this.emit(LISTS_UPDATE_EVENT);
            return;
          }

          // If we're joining an upgraded room, we'll want to make sure we don't proliferate
          // the dead room in the list.
          if (oldMembership !== membership/* EffectiveMembership */._T.Join && newMembership === membership/* EffectiveMembership */._T.Join) {
            const room = payload.room;
            const roomUpgradeHistory = room.client.getRoomUpgradeHistory(room.roomId, true, this.msc3946ProcessDynamicPredecessor);
            const predecessors = roomUpgradeHistory.slice(0, roomUpgradeHistory.indexOf(room));
            for (const predecessor of predecessors) {
              this.roomSkipList.removeRoom(predecessor);
            }
          }
          this.addRoomAndEmit(payload.room, oldMembership === membership/* EffectiveMembership */._T.Leave);
          break;
        }
      case actions/* Action */.r.AfterForgetRoom:
        {
          const room = payload.room;
          this.roomSkipList.removeRoom(room);
          this.emit(LISTS_UPDATE_EVENT);
          break;
        }
    }
  }

  /**
   * This method deals with the two types of account data payloads that we care about.
   */
  handleAccountDataPayload(payload) {
    const eventType = payload.event_type;
    let needsEmit = false;
    switch (eventType) {
      // When we're told about new DMs, insert the associated dm rooms.
      case matrix.EventType.Direct:
        {
          const dmMap = payload.event.getContent();
          for (const userId of Object.keys(dmMap)) {
            const roomIds = dmMap[userId];
            for (const roomId of roomIds) {
              const room = this.matrixClient.getRoom(roomId);
              if (!room) {
                logger/* logger */.vF.warn(`${roomId} was found in DMs but the room is not in the store`);
                continue;
              }
              this.roomSkipList.reInsertRoom(room);
              needsEmit = true;
            }
          }
          break;
        }
      case matrix.EventType.PushRules:
        {
          // When a room becomes muted/unmuted, re-insert that room.
          const possibleMuteChangeRoomIds = (0,roomMute/* getChangedOverrideRoomMutePushRules */.Q)(payload);
          if (!possibleMuteChangeRoomIds) return;
          const rooms = possibleMuteChangeRoomIds.map(id => {
            var _this$matrixClient2;
            return (_this$matrixClient2 = this.matrixClient) === null || _this$matrixClient2 === void 0 ? void 0 : _this$matrixClient2.getRoom(id);
          }).filter(room => !!room);
          for (const room of rooms) {
            this.roomSkipList.reInsertRoom(room);
            needsEmit = true;
          }
          break;
        }
    }
    if (needsEmit) this.emit(LISTS_UPDATE_EVENT);
  }

  /**
   * Create the correct sorter depending on the persisted user preference.
   * @param myUserId The user-id of our user.
   * @returns Sorter object that can be passed to the skip list.
   */
  getPreferredSorter(myUserId) {
    const preferred = SettingsStore/* default */.A.getValue("RoomList.preferredSorting");
    switch (preferred) {
      case sorters/* SortingAlgorithm */.U.Alphabetic:
        return new AlphabeticSorter();
      case sorters/* SortingAlgorithm */.U.Recency:
        return new RecencySorter(myUserId);
      default:
        throw new Error(`Got unknown sort preference from RoomList.preferredSorting setting`);
    }
  }

  /**
   * Add a room to the skiplist and emit an update.
   * @param room The room to add to the skiplist
   * @param isNewRoom Set this to true if this a new room that the isn't already in the skiplist
   */
  addRoomAndEmit(room, isNewRoom = false) {
    if (!this.roomSkipList) throw new Error("roomSkipList hasn't been created yet!");
    if (isNewRoom) {
      if (!VisibilityProvider/* VisibilityProvider */.W.instance.isRoomVisible(room)) {
        logger/* logger */.vF.info(`RoomListStoreV3: Refusing to add new room ${room.roomId} because isRoomVisible returned false.`);
        return;
      }
      this.roomSkipList.addNewRoom(room);
    } else {
      this.roomSkipList.reInsertRoom(room);
    }
    this.emit(LISTS_UPDATE_EVENT);
  }
  onActiveSpaceChanged() {
    if (!this.roomSkipList) return;
    this.roomSkipList.calculateActiveSpaceForNodes();
    this.emit(LISTS_UPDATE_EVENT);
  }
}
class RoomListStoreV3 {
  static get instance() {
    if (!RoomListStoreV3.internalInstance) {
      const instance = new RoomListStoreV3Class(dispatcher/* default */.A);
      instance.start();
      RoomListStoreV3.internalInstance = instance;
    }
    return this.internalInstance;
  }
}
(0,defineProperty/* default */.A)(RoomListStoreV3, "internalInstance", void 0);
window.getRoomListStoreV3 = () => RoomListStoreV3.instance;

/***/ }),

/***/ "./src/stores/room-list-v3/skip-list/filters/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ FilterKey)
/* harmony export */ });
/*
Copyright 2025 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

let FilterKey = /*#__PURE__*/function (FilterKey) {
  FilterKey[FilterKey["FavouriteFilter"] = 0] = "FavouriteFilter";
  FilterKey[FilterKey["UnreadFilter"] = 1] = "UnreadFilter";
  FilterKey[FilterKey["PeopleFilter"] = 2] = "PeopleFilter";
  FilterKey[FilterKey["RoomsFilter"] = 3] = "RoomsFilter";
  FilterKey[FilterKey["LowPriorityFilter"] = 4] = "LowPriorityFilter";
  FilterKey[FilterKey["MentionsFilter"] = 5] = "MentionsFilter";
  FilterKey[FilterKey["InvitesFilter"] = 6] = "InvitesFilter";
  return FilterKey;
}({});

/***/ })

}]);
//# sourceMappingURL=1436.js.map